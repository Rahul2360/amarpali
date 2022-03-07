from elasticsearch import Elasticsearch
from datetime import datetime
import time
import ast
import json


#es=Elasticsearch({"scheme": "http", "host": "localhost", "port": 9200})
es = Elasticsearch(["http://localhost:9200/"],
                             basic_auth=("elastic","changeme"),
                             http_compress=True)
print(es.ping())


mapping = {
    "mappings": {
        "properties": {
            "create_datetime": {"type": "text"},
            "id":{"type":"integer"},
            #"log_create_date":{"type":"yyyy,MM,dd,hh,mm,ss"},
            "log_create_date": {
                "type":   "date",
                "format": "dd/MM/yyyy HH:mm:ss"
                     },
            "log_type": {"type": "text"},
            "error":{"type":"boolean"},
            "data": {
                "properties":{
                "type": {"type":"text"},
                "case":{"type":"text"},
                "data":{
                    "properties":{
                        "socket":{
                            "properties":{
                                "_url":{"type":"text"},
                                "_sip_uri":{"type":"text"},
                                "_via_transport":{"type":"text"},
                                "_ws":{
                                    "properties":{
                                        "_zone_symbol_openfalse":[{
                                            "properties":{
                                                "type":{"type":"text"},
                                                "state":{"type":"text"},
                                                "source":{"type":"text"},
                                                "zone":{"type":"text"},
                                                "runCount":{"type":"integer"}
                                            }
                                            }],
                                            "_zone_symbol_closefalse":[{
                                                "properties":{
                                                    "type":{"type":"text"},
                                                    "state":{"type":"text"},
                                                    "source":{"type":"text"},
                                                    "zone":{"type":"text"},
                                                    "runCount":{"type":"integer"}
                                                }
                                                }],
                                                "_zone_symbol_errorfalse":[{
                                                "properties":{
                                                    "type":{"type":"text"},
                                                    "state":{"type":"text"},
                                                    "source":{"type":"text"},
                                                    "zone":{"type":"text"},
                                                    "runCount":{"type":"integer"}
                                                }
                                                }]
                                                }
                                            }
                                        }
                                    },
                                            "properties":{
                                                "error":{"type":"text"},
                                                "code":{"type":"integer"},
                                                "reason":{"type":"text"}
                                            }
                                            }
                                            }
                                            },
                                            "username":{
                                                "properties":{
                                                    "user_name":{"type":"text"}
                                                }
                                            }
            }
        }           
                                                 
        }
}


es.indices.delete(index='log_data',ignore=[400,404])
es.indices.create(index="log_data",ignore=400,body=mapping)
f=open("/media/tikam/afb06373-f5ae-4baa-95b1-104c086ea793/tikam/Downloads/log files/client_logs/CLIENT_LOGS.log.2022-02-28","r+")


fh=f.readlines()


#fields =["log_type","data","user_info"]
  
#with open(filename) as fh:

for i in range(len(fh)):

        dict1 = {}
        details=fh[i].split("|")
        dict1["create_datetime"]=details[1]
       
        dict1["id"]=i+1
        current = time.strftime(r"%d.%m.%Y %H:%M:%S", time.localtime())
        #now=current.strftime("%d/%m/%Y %H:%M:%S")
        dict1["log_create_datetime"]=current
        res=ast.literal_eval(details[2])
        dict1["log_type"]= res["log_type"]
        #print(res["data"])
        dict1["error"]=res["data"]["data"]["error"]
        dict1["data"]= res["data"]
        dict1["username"]=res["binfo"]  
        data=json.dumps(dict1)
       # print(data)
        es.index(index="log_data",id=i+1,body=data)
#data2 = es.get(index="log_data",id=1,) 
#print(data2)






#es.indices.put_mapping(
#    index="log_data1"
#    doc_type="logs"
#    body=
#    {
#        "properties":{
#            "create_datetime":{
#                "type":"date",
#                "format":"yyyy,MM,dd,hh,mm,ss"
#                "fields":{
#                    "keyword":{
#                        "type":"keyword"
#                        "ignore_above":256
#                    }
#                }
#            },
#            "log_type":{
#                "type":"text",
#                "fields":{
#                    "keyword":{
#                        "type":"keyword",
#                        "ignore_above":256
#                    }
#                }
#            },
#            "data":{
#                "type":"text",
#                "fields":{
#                    "keyword":{
#                        "type":"keyword",
#                        "ignore_above":256
#                    }
#                }
#            },
#            "username":{
#                "type":"text",
#                "fields":{
#                    "keyword":{
#                        "type":"keyword",
#                        "ignore_above":256
#                    }
#                }
#            }
#        }
#    }
#)

