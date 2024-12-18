import boto3
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger()

def upload_file_to_s3(file_name, bucket):
    s3_client = boto3.client('s3')
    try:
        s3_client.upload_file(file_name, bucket, file_name)
        logger.info(f'Successfully uploaded {file_name} to {bucket}.')
    except Exception as e:
        logger.error(f'Failed to upload {file_name} to {bucket}: {e}')
