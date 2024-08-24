import json
import datetime
def writeToJsonFile(fileName,data):
    filePathNameWithExt = './' + fileName +'.json'
    with open(filePathNameWithExt,'w') as json_file:
        json.dump(data,json_file,indent=2)

def appendToJsonFile(data):
    filePathNameWithExt = './' + "data" +'.json'
    with open(filePathNameWithExt) as json_file:
        tasks = json.load(json_file)
        data.id = findMaxTaskIdAndIncrement(tasks)
        tasks.append(data.__dict__)
        with open(filePathNameWithExt,"w") as json_file:
            json.dump(tasks,json_file,indent=2)


        

def findMaxTaskIdAndIncrement(tasks):

    maxId = tasks[0]['id']
    for i in range(1,len(tasks)):
        if(tasks[i]['id'] is None):
            break
        elif(maxId < tasks[i]['id']):
            maxId = tasks[i]['id']

    maxId+=1
    return maxId


def findTaskByIdAndUpdateDescription(tasks,id,description):
    for i in range(len(tasks)):
        if(tasks[i]['id'] is None):
            break
        elif (id == tasks[i]['id']):
            tasks[i]['description'] = description
            tasks[i]['updatedAt'] = datetime.datetime.now().strftime("%m/%d/%Y : %H:%M:%S")
    
    return tasks


def findTaskByIdAndDelete(tasks,id):
    for i in range(len(tasks)):
        if(tasks[i]['id'] is None):
            break
        elif (id == tasks[i]['id']):
            del tasks[i]
            return tasks

    return []

def findTaskByIdAndUpdateStatus(tasks,id,status):
    for i in range(len(tasks)):
        if(tasks[i]['id'] is None):
            break
        elif (id == tasks[i]['id']):
            match status:
                case "in_progress":
                    tasks[i]['status'] = status
                    return tasks
                case "done":
                    tasks[i]['status'] = status
                    return tasks
                
    return []


def listTasks(tasks,status):
    print("#     description     status  createdAt  updatedAt")

    if status == "tasks":
        for i in range(len(tasks)):
            print(str(tasks[i]['id']) + "    " + tasks[i]['description'] + "    " + tasks[i]['status'] + "  " + tasks[i]['createdAt'] + "  " + tasks[i]['updatedAt']) 
    elif status == "done":
        for i in range(len(tasks)):
            if tasks[i]["status"] == "done":
                print(str(tasks[i]['id']) + "    " + tasks[i]['description'] + "    " + tasks[i]['status'] + "  " + tasks[i]['createdAt'] + "  " + tasks[i]['updatedAt']) 
    elif status == "todo":
        for i in range(len("status")):
            if tasks[i]["status"] == "todo":
                print(str(tasks[i]['id']) + "    " + tasks[i]['description'] + "    " + tasks[i]['status'] + "  " + tasks[i]['createdAt'] + "  " + tasks[i]['updatedAt']) 
    elif status == "in_progress":
        for i in range(len(tasks)):
            if tasks[i]["status"] == "in_progress":
                print(str(tasks[i]['id']) + "    " + tasks[i]['description'] + "    " + tasks[i]['status'] + "  " + tasks[i]['createdAt'] + "  " + tasks[i]['updatedAt']) 





  
                




