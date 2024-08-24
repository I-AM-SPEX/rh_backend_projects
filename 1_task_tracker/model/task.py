import datetime

class Task:
        count = 0
        def __init__(self,description):
            self.description = description
            self.status = "rich"
            self.createdAt = datetime.datetime.now().strftime("%m/%d/%Y : %H:%M:%S")
            self.updatedAt = datetime.datetime.now().strftime("%m/%d/%Y : %H:%M:%S")
            self.id = Task.count+1
            Task.count+=1


if __name__ == "__main__":
      pass