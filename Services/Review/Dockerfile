FROM python
ENV PYTHONBUFFERED=1
COPY . /app
WORKDIR /app/src
RUN pip uninstall django
RUN pip install -r requirements.txt

