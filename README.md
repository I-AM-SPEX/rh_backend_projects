# My roadmap.sh backend solutions
This repo was made for me to learn python and solidify my javascript understandng by building the backend projects on roadmap.sh

## Setting Up
First, clone this repository
<!-- start:code block -->

``` bash
git clone https://github.com/sammelo2000/rh_backend_projects
```
``` bash
cd rh_backend_projects
```
# Projects

## Task Tracker CLI
Task Tracker CLI is command line tool that helps with managining and tracking of small tasks.

### Installation
``` bash
cd 1_task_tracker
```
### Run the app
```bash
python task_tracker.py
```
## Tutorial

### Creating a task with the ```--add``` command
```bash
python task_tracker.py --add "Go Running"
```
### Updating a task using task ID
```bash
python task_tracker.py --update 1
```
### Deleting a task using task ID
```bash
python task_tracker.py --delete 2
```
### Changing a status of a task to in-progress using task ID
```bash
python task_tracker.py --mark_in_progress 1
```
### Changing the status of a task to done using task ID
```bash
python task_tracker.py --mark_done 3
```
### Listing all tasks
```bash
python task_tracker.py --list "tasks"
```
### Listing all tasks with done status
```bash
python task_tracker.py --list_done "done"
```
### Listing all tasks with todo status
```bash
python task_tracker.py --list_todo "todo"
```
### Listing all tasks with in-progress status
```bash
python task_tracker.py --list_in_progress "in-porgress"
```
### Listing all tasks with done status


<!-- end:code block -->
