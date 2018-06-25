# Producer(Student and Teacher)
This project is related to producing student and teacher data.
Writing those data to csv files.
creating JSON api from csv files.

# Instruction

1. install nodejs by command
    $update brew
    $brew install node
2. Run producer_server.js for server up
    $node producer_server.js

3. go to http://localhost:8080 to display UI

4. http://localhost:8080/students to display details of all students in JSON format

5. http://localhost:8080/teachers to display details of all teachers in JSON format

6. http://localhost:8080/students/{id} to display details of a particular student with {id} in JSON format

7. http://localhost:8080/teachers/{id} to display details of a particular teacher with {id} in JSON format
