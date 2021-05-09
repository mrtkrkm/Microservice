import pika
import json


class Rabbitmq(object):
    def __init__(self,quee_name='review'):
        self._connection = pika.BlockingConnection(pika.ConnectionParameters(host='rabbitmq',heartbeat=600))
        self._channel = self._connection.channel()
        self.quee_name=quee_name
        self._channel.queue_declare(queue=quee_name, durable=True)

    def publish(self, body):
        properties=pika.BasicProperties(delivery_mode=2,)
        message=json.dumps(body)
        self._channel.basic_publish(
            exchange='',
            routing_key=self.quee_name,
            body=message,
            properties=properties)

        print("Message succesfully sent")
