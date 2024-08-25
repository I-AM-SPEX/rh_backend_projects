## Task Tracker CLI
Task Tracker CLI is command line tool that helps with managining and tracking of small tasks.

## Installation
cd 1_task_tracker

# Run the app
python task_tracker.py

# Tutorial

## Creating a task with the --add command
python task_tracker.py --add "Go Running"

## Updating a task using task ID
python task_tracker.py --update 1

## Deleting a task using task ID
python task_tracker.py --delete 2

## Changing a status of a task to in-progress using task ID
python task_tracker.py --mark_in_progress 1

## Changing the status of a task to done using task ID
python task_tracker.py --mark_done 3

## Listing all tasks
python task_tracker.py --list "tasks"

## Listing all tasks with done status
python task_tracker.py --list_done "done"
## Listing all tasks with todo status
python task_tracker.py --list_todo "todo"

## Listing all tasks with in-progress status
python task_tracker.py --list_in_progress "in-porgress"

## Listing all tasks with done status
