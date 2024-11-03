#### Distributed System #####

https://www.freecodecamp.org/news/a-thorough-introduction-to-distributed-systems-3b91562c9b3c?ref=morioh.com&utm_source=morioh.com
 - Why distribued system?
    - Scale horizontally
    - Fault Tolerance
    - Low Latency

    - example: Scaling DB
      - increase READ performance with Primary-Read-Replica Replication
      - Propagating data with replication to read-replica does not happen instantaneously
      - increase WRITE performance with Multi-Primary Replication with Sharding
      - Sharding can avoid 'hot spot' but re-sharding is very expensive
        https://mashable.com/archive/foursquare-downtime-post-mortem#qyp__Q9UDkqW

 - CAP theorem
    - Consistency, Availability, Partiion Tolerant 

    - When network become parition and lost replication, two master database has inconsitency state.
      Eventual Consistency can help to guarantee that if no new updates are made to a given item,
      eventually all accesses to that item will return the latest updated value.

      Cassandra uses Consistency hashing to find which nodes keep from ring that have the data. Using 
      Replication factor to determine how many nodes to replicate. This can improve the WRITE performance.

 - Consensus
    - Using 'paxos' algorithm to solve network Partiioning.

 - HDFS (Hadoop Distributed File system)
    - Store and replicate large files in GB across multiple nodes.
    - Consists mainly of NameNodes and DataNodes
      - NameNodes knows which nodes keeps file blocks and acts as coordinators for network by figuring out
        where best to store and replicate files.

 - IPFS (Interplanetary File system)
    - peer-to-peer protocol for distributed file system

 - Distributed Messaging
    - Messages creates by Producers and Consumers read them.
      Consumer can either 'pull' or broker to 'push'

      RabbitMQ can route message by rules and itself behave as broker, keep track of messages. From CAP theorem,
      it is AP and CP (Availability and Partiion Tolerance) and (Consistency and Partiion Tolerance)

      Kafka does not track messages and set of rules to route them. It relies on Consumers to pull from brokers.

      AWS SQS, SNS or MQ or ActiveMQ, Artemis

 - Distributed ledgers
    - Bitcoins

##### AAA ######
https://www.okta.com/identity-101/authentication-vs-authorization/?ref=morioh.com&utm_source=morioh.com
 - Authorization:
 - Authentication:

https://hackernoon.com/auth-headers-vs-jwt-vs-sessions-how-to-choose-the-right-auth-technique-for-apis-57e15edd053

#### KV database #####
https://redis.com/nosql/key-value-databases/?ref=morioh.com&utm_source=morioh.com

#### Service Discovery #####
https://devopscube.com/service-discovery-explained/?ref=morioh.com&utm_source=morioh.com

#### API #####
https://www.postman.com/what-is-an-api/?ref=morioh.com&utm_source=morioh.com
