from model.task import Task
import argparse
from helper.handle_json import writeToJsonFile,appendToJsonFile,findTaskByIdAndUpdateDescription,findTaskByIdAndDelete,findTaskByIdAndUpdateStatus,listTasks
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
         parser.add_argument("--delete",type=int)
         parser.add_argument("--mark_in_progress",nargs=1)
         parser.add_argument("--mark_done",nargs=1)
         parser.add_argument("--list",type=str)
         parser.add_argument("--list_done",type=str)
         parser.add_argument("--list_todo",type=str)
         parser.add_argument('--list_in_progress',type=str)

         args = parser.parse_args()
         if args.add:
             self.add(args.add)
         elif args.update:
             self.update(int(args.update[0]),str(args.update[1]))
         elif args.delete:
             self.delete(args.delete)
         elif args.mark_in_progress:
             self.markInProgress(int(args.mark_in_progress[0]))
         elif args.mark_done:
             self.markDone(int(args.mark_done[0]))
         elif args.list and args.list == "tasks":
             self.list()
         elif args.list_done and args.list_done == "done":
             self.listStatus(args.list_done)
         elif args.list_todo and args.list_todo == "todo":
             self.listStatus(args.list_todo)
         elif args.list_in_progress and args.list_in_progress == "in_progress":
             self.listStatus(args.list_in_progress)
             



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
                updatedTasks = findTaskByIdAndUpdateDescription(json_tasks,id,description)
                writeToJsonFile("data",updatedTasks)


    def delete(self,id):
        if path.isfile(fileName) is False or stat("data.json") == 0:
            print("Json database does dont exist")
        else:
            with open(fileName) as json_file:
                json_tasks = json.load(json_file)
                updatedTasks = findTaskByIdAndDelete(json_tasks,id)
                if(len(updatedTasks) > 0):
                    writeToJsonFile("data",updatedTasks)
                else:
                    print("Cant find Task with id:" + id)


    def markInProgress(self,id):
        if path.isfile(fileName) is False or stat("data.json") == 0:
            print("Json data does not exist, try add a task")
        else:
            with open(fileName) as json_file:
                json_tasks = json.load(json_file)
                updatedTasks = findTaskByIdAndUpdateStatus(json_tasks,id,"in_progress")
                if(len(updatedTasks) > 0 ):
                    writeToJsonFile("data",updatedTasks)

    def markDone(self,id):
        if path.isfile(fileName) is False or stat("data.json") == 0:
            print("Json data does not exist, try add a task")
        else:
             with open(fileName) as json_file:
                json_tasks = json.load(json_file)
                updatedTasks = findTaskByIdAndUpdateStatus(json_tasks,id,"done")
                if(len(updatedTasks) > 0 ):
                    writeToJsonFile("data",updatedTasks)


    def list(self):
        if path.isfile(fileName) is False or stat("data.json") == 0:
            print("Json data does not exist, try add a task")
        else:
            with open(fileName) as json_file:
                json_tasks = json.load(json_file)
                listTasks(json_tasks,"tasks")

    def listStatus(self,status):
        if path.isfile(fileName) is False or stat("data.json") == 0:
            print("Json data does not exist,try add a task")
        else:
            with open(fileName) as json_file:
                json_tasks = json.load(json_file)
                listTasks(json_tasks,status)
   
            



    
                    



    

if __name__ == "__main__":
     
    app = TaskTrackerApp()
    app.start()



        

