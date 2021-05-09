import time
from django.db import connections
from django.db.utils import OperationalError
from django.core.management import BaseCommand

class Command(BaseCommand):
    """Django command to pause execution until db is available"""

    def handle(self, *args, **options):
        self.stdout.write('Waiting for rabbitmq...')
        time.sleep(15)
        db_conn = None
        while not db_conn:
            try:
                db_conn = connections['default']
            except OperationalError:
                self.stdout.write('Database unavailable, waititng 1 second...')
                time.sleep(4)

        self.stdout.write(self.style.SUCCESS('Database available!'))