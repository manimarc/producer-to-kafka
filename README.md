# producer-to-kafka
# This Microservice is built in NESTJS and allows a user to send messages to kafka
# to run this application you need to install kafka and zookeeper using docker-compose or other options then follow the below steps:

# 
# install microservice packages
1. install and configure kafka and zookeeper
2. copy and paste .env.example, rename the file to .env and configure environment variable accordingly
3. npm install
# run microservice
4. npm run start


# to test
5. open postman, copy and paste below json in body and try to modify them:
{
    "service": "kafafasdza",
   "recipient":"put phone numbers separated by <comma or semi-colon> or email separated by <comma or semi-colon>",
    "text":"text messae   cvbbv",
    "category":" is PHONE if recipient are phones or is EMAIL if recipients are emails",
    "type":"is SINGLE if the message is sent to only one recipient and BULK otherwise"
}

# to consume the service run the following command:
6. run kafka bash mode or (sudo docker exec -it kafka /bin/bash) then copy and paste the following command
7. kafka-console-consumer.sh notification-service --bootstrap-server localhost:9092 --topic notifications-topic --from-beginning

