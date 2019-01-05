# node-sqlite
Lesson/practice with using an SQL database with node

- Setup SQL for Node
- SQL in the Cloud: Data.World
- SQL Statements
- SQL Practice
	- Business Licenses Dataset
	- Land Bank Inventory Dataset
	- Alternative: Querying the Detroit Open Data API directly


# Setup SQL for Node

Tutorial:
http://www.sqlitetutorial.net/sqlite-nodejs/ 

### Set up database

Create table: http://www.sqlitetutorial.net/sqlite-create-table/

Insert rows: http://www.sqlitetutorial.net/sqlite-nodejs/insert/

### Run a query on your table/database

http://www.sqlitetutorial.net/sqlite-nodejs/query/



# SQL in the Cloud: Data.World

https://data.world/alaurenzi/shiftup/workspace

# SQL Statements

Basic READ Statements
* SELECT
* WHERE
* ORDER BY
* LIMIT

More Advanced READ Statements:
   * COUNT
   * GROUP BY
   * LIKE
   * JOIN


Data Modification Statements:
   * INSERT
   * UPDATE
   * DELETE


# SQL Practice

### Business Licenses Dataset
https://data.detroitmi.gov/Business/Business-Licenses/pugj-2dh4


Questions to answer by writing SQL:
   * What were the 5 most recent business licenses obtained?
   * How many business permits were opened with 
   * What type of business category is most common overall?
   * What type of business category is most common over the past year? Month?


### Land Bank Inventory Dataset
https://data.detroitmi.gov/Property-Parcels/Land-Bank-Inventory/vsin-ur7i


Map visualization: https://cityofdetroit.github.io/demo-tracker/ 


Questions to answer by writing SQL:
   * Write a statement to see if there are any properties within your neighborhood?
   * Here is a statement to get the a list of all neighborhoods:

      * How many exist in your neighborhood in total? Within each "inventory status type"
      * Or:
      * How many land bank properties exist in the the "North End" neighborhood?
      * How many exist within each "inventory status type" within the "North End"?




### Alternative: Querying the Detroit Open Data API directly

Dataset/API Docs:
https://dev.socrata.com/foundry/data.detroitmi.gov/mhw8-ppmt


API docs: https://dev.socrata.com/docs/queries/
