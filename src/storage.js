import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";

const { AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, BUCKET_NAME } =
  import.meta.env;

const client = new S3Client({
  region: AWS_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  },
});

const Bucket = BUCKET_NAME;
const Key = "data.json";

export async function store(namespace, data) {
  if (data) {
    const command = new PutObjectCommand({
      Bucket,
      Key,
      Body: JSON.stringify(data),
    });

    await client.send(command);
    return;
  }

  const command = new GetObjectCommand({
    Bucket,
    Key,
  });

  let res;

  try {
    res = await client.send(command);
  } catch (e) {
    if (e.constructor.name == "_NoSuchKey") return [];
    throw e;
  }

  const reader = res.Body.getReader();
  const d = await reader.read();
  const s = new TextDecoder("utf-8").decode(d.value);
  return JSON.parse(s);
}
