import json

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


def findTaskByIdAndUpdate(tasks,id,description):
    for i in range(len(tasks)):
        if(tasks[i]['id'] is None):
            break
        elif (id == tasks[i]['id']):
            tasks[i]['description'] = description
    
    return tasks




