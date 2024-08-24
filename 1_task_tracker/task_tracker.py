from model.task import Task
import argparse
from helper.handle_json import writeToJsonFile, appendToJsonFile,findTaskByIdAndUpdate
from os import path, stat
import json

fileName = './data.json'
tasks = []
class TaskTrackerApp:
    def __init__(self):
         pass
    def start(self):
         parser = argparse.ArgumentParser()
         parser.add_argument("--add",type=str)
         parser.add_argument("--update",nargs=2)
         args = parser.parse_args()
         if args.add:
             self.add(args.add)
         elif args.update:
             self.update(int(args.update[0]),str(args.update[1]))
         



    def add(self,description):
        if path.isfile(fileName) is False or stat("data.json") == 0:
            task = Task(description)
            tasks.append(task.__dict__)
            writeToJsonFile("data",tasks)
        else:
            print(stat('./data.json') == 0)
            task = Task(description)
            appendToJsonFile(task)


    def update(self,id,description):
        if path.isfile(fileName) is False or stat("data.json") == 0:
            task = Task(description)
            tasks.append(task.__dict__)
            writeToJsonFile("data",tasks)
        else:
            with open(fileName) as json_file:
                json_tasks = json.load(json_file)
                updatedTasks = findTaskByIdAndUpdate(json_tasks,id,description)
                writeToJsonFile("data",updatedTasks)

    

if __name__ == "__main__":
     
    app = TaskTrackerApp()
    app.start()



        
