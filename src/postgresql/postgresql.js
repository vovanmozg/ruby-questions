module.exports = [
  {
    "id": "3acafcd1-2994-4a30-84e9-d296b0c08553",
    "question": "What is a fork in the context of PostgreSQL storage?",
    "choices": {
      "1": "A part of a table's representation on the filesystem.",
      "2": "A division in the database management software.",
      "3": "A type of database extension.",
      "4": "A PostgreSQL backup method."
    },
    "answer": "1",
    "type": "mc",
    "tags": [
      "advanced-level", "forks"
    ],
    "explanation": ""
  },
  {
    "id": "88fe06f0-8b3c-4ba1-9880-02d6423ab4a2",
    "question": "Why is there a file size limit of 1 GB in PostgreSQL by default?",
    "choices": {
      "1": "To maintain compatibility with all file systems.",
      "2": "To prevent data corruption.",
      "3": "To optimize data retrieval speed.",
      "4": "To make backups easier."
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "advanced-level", "forks"
    ],
    "explanation": ""
  },
  {
    "id": "c6ff252e-8dbd-4d75-b1fa-f40c58839d67",
    "question": "What is the significance of having multiple files for a single relation?",
    "choices": {
      "1": "To handle large tables which exceed the file size limit.",
      "2": "To provide redundancy.",
      "3": "To ensure data integrity.",
      "4": "To make data migration easier."
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "advanced-level", "forks"
    ],
    "explanation": ""
  },
  {
    "id": "b98d96aa-b9bf-42a3-85c4-01573e8838a0",
    "question": "What information does the main fork store?",
    "choices": {
      "1": "The actual data of the table.",
      "2": "Meta information about the table.",
      "3": "Archived data for backups.",
      "4": "Log of all changes made to the table."
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "advanced-level", "forks"
    ],
    "explanation": ""
  },
  {
    "id": "a7a7949a-db3a-4c22-8689-86c913fe1bdf",
    "question": "Describe the function of the initialization fork (init fork).",
    "choices": {
      "1": "To handle special cases for unlogged tables.",
      "2": "To initiate database connections.",
      "3": "To store initial configurations of tables.",
      "4": "To store the initial state of all tables."
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "advanced-level", "forks"
    ],
    "explanation": ""
  },
  {
    "id": "9d5d0a52-33fd-47cd-9aaf-d2b310a01f9f",
    "question": "What does the free space map (FSM) fork track?",
    "choices": {
      "1": "The amount of free space available in the table.",
      "2": "The space used by the table.",
      "3": "Archived data.",
      "4": "Changes made to the table."
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "-level"
    ],
    "explanation": ""
  },
  {
    "id": "be719287-a472-4203-8968-16553affb4de",
    "question": "What is the main purpose of the visibility map layer?",
    "choices": {
      "1": "To quickly determine if a page needs cleanup or freezing.",
      "2": "To provide security to the data.",
      "3": "To enhance data retrieval speed.",
      "4": "To track user activity."
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "-level"
    ],
    "explanation": ""
  },
  {
    "id": "9283f412-4c6f-45a4-aede-9ff910e9f190",
    "question": "How are files named in PostgreSQL for different forks?",
    "choices": {
      "1": "By appending special suffixes to represent different forks.",
      "2": "Based on table names only.",
      "3": "Using a combination of table and column names.",
      "4": "By using unique numerical IDs."
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "-level"
    ],
    "explanation": ""
  },
  {
    "id": "0857485b-14c3-4a28-a28a-ac2ba2487534",
    "question": "A file with the `_init` suffix indicates:",
    "choices": {
      "1": "It's related to the initialization fork of unlogged tables.",
      "2": "It's the first file of the table.",
      "3": "It contains the table's initial configurations.",
      "4": "It's a backup file."
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "-level"
    ],
    "explanation": ""
  },
  {
    "id": "02957e4d-4ad7-4dd6-9d0a-b44a540384ca",
    "question": "The `_fsm` suffix in file names indicates:",
    "choices": {
      "1": "The file maps free space.",
      "2": "The file contains system metadata.",
      "3": "The file is encrypted.",
      "4": "The file is meant for faster search operations."
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "-level"
    ],
    "explanation": ""
  },
  {
    "id": "d6d21560-7332-4452-b2a6-e72ad63c7de5",
    "question": "Why do unlogged tables work faster compared to regular tables?",
    "choices": {
      "1": "Their actions aren’t logged to the write-ahead log.",
      "2": "They use better compression algorithms.",
      "3": "They are stored in a faster storage medium.",
      "4": "They have a different file structure."
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "-level"
    ],
    "explanation": ""
  },
  {
    "id": "3f7e20ac-7ff4-4ebd-ba37-05f4800dc26d",
    "question": "How does the visibility map assist in query operations?",
    "choices": {
      "1": "It allows for index-only scans without checking tuple visibility.",
      "2": "It increases the database connection speed.",
      "3": "It facilitates faster joins.",
      "4": "It enhances SQL parsing speed."
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "-level"
    ],
    "explanation": ""
  },
  {
    "id": "7c39486e-d2ca-407b-b957-797c152fc063",
    "question": "What is represented by the two bits allocated for each table page in the visibility map?",
    "choices": {
      "1": "Whether the page needs cleanup and if all rows are frozen.",
      "2": "The version number of the page.",
      "3": "The priority of the page.",
      "4": "The encryption status of the page."
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "-level"
    ],
    "explanation": ""
  },
  {
    "id": "bd157418-3d9c-4b5e-b81f-a3087bbad9b3",
    "question": "Why doesn't the visibility map exist for indexes?",
    "choices": {
      "1": "Indexes are cleaned up differently.",
      "2": "Indexes are always visible.",
      "3": "Indexes don’t have pages.",
      "4": "Indexes are automatically frozen."
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "-level"
    ],
    "explanation": ""
  },
  {
    "id": "861f6d8a-1ffa-4d1f-bdbe-e9c77f21601d",
    "question": "What is significant about frozen pages in the context of the visibility map?",
    "choices": {
      "1": "They don't need any cleanup or vacuum operations.",
      "2": "They have an older version of the data.",
      "3": "They are archived pages.",
      "4": "They are locked pages and can't be accessed."
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "-level"
    ],
    "explanation": ""
  },
  {
    "id": "0109a0b5-3578-4789-b47f-c37f9320a1dc",
    "question": "How does PostgreSQL handle unlogged tables after a crash or failure?",
    "choices": {
      "1": "Deletes all layers of such objects and replaces them with an initialization layer.",
      "2": "Restores them from a backup.",
      "3": "Keeps them as-is without any change.",
      "4": "Flags them for manual inspection."
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "-level"
    ],
    "explanation": ""
  },
  {
    "id": "58143ac7-ecc1-4ffd-8afd-e03fb75c3be6",
    "question": "What is a cluster in the context of PostgreSQL?",
    "choices": {
      "1": "A collection of databases managed by a PostgreSQL instance",
      "2": "A backup of a PostgreSQL database",
      "3": "A type of PostgreSQL server",
      "4": "A network of PostgreSQL databases"
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "-level"
    ],
    "explanation": ""
  },
  {
    "id": "0f454de6-a661-47c5-9cc6-19f0313b6cd1",
    "question": "What does 'PGDATA' typically refer to?",
    "choices": {
      "1": "The directory containing all files related to a PostgreSQL cluster",
      "2": "The main configuration file for PostgreSQL",
      "3": "The PostgreSQL user authentication file",
      "4": "The backup directory for PostgreSQL"
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "-level"
    ],
    "explanation": ""
  },
  {
    "id": "2e922680-2267-4a8a-b212-45186421a010",
    "question": "What is the purpose of the 'template1' database?",
    "choices": {
      "1": "It serves as a template for all other user-created databases in the cluster",
      "2": "It is used for recovery and backup operations",
      "3": "It is a temporary database for PostgreSQL operations",
      "4": "It contains the initial configurations for the PostgreSQL instance"
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "-level"
    ],
    "explanation": ""
  },
  {
    "id": "ffdff1a4-2adc-4709-8776-17aaa5075182",
    "question": "Why might 'template0' never change?",
    "choices": {
      "1": "It is used for recovery or creating databases in different encodings",
      "2": "It contains crucial system configurations",
      "3": "It is locked by default for security purposes",
      "4": "It is a placeholder and does not have any actual data"
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "-level"
    ],
    "explanation": ""
  },
  {
    "id": "564dfc8d-86b0-44c7-b98a-d5a08ca8d509",
    "question": "Where is meta-information about all cluster objects stored in PostgreSQL?",
    "choices": {
      "1": "In system catalog tables",
      "2": "In configuration files",
      "3": "In external databases",
      "4": "In server logs"
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "-level"
    ],
    "explanation": ""
  },
  {
    "id": "5b98d948-3797-4ebf-8b2f-516fd7783dea",
    "question": "What describes objects of a specific database in PostgreSQL?",
    "choices": {
      "1": "A unique set of tables in the system catalog",
      "2": "A shared set of tables in the system catalog",
      "3": "Configuration files specific to the database",
      "4": "Logs generated by the database"
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "-level"
    ],
    "explanation": ""
  },
  {
    "id": "afad4c45-6523-4958-a204-3baab3291e73",
    "question": "How can you interact with the system catalog?",
    "choices": {
      "1": "Only through the database configuration",
      "2": "Using special software tools only",
      "3": "Through regular SQL queries",
      "4": "It's read-only and cannot be interacted with"
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "-level"
    ],
    "explanation": ""
  },
  {
    "id": "22522ea7-6f9b-40fc-aca7-b482cc24d7de",
    "question": "What prefix do all system catalog table names have?",
    "choices": {
      "1": "sys_",
      "2": "db_",
      "3": "meta_",
      "4": "pg_"
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "-level"
    ],
    "explanation": ""
  },
  {
    "id": "9627cc9c-a9e1-4000-8532-a0b3b5f1e12c",
    "question": "What is the primary key column name in all system catalog tables?",
    "choices": {
      "1": "id",
      "2": "key",
      "3": "oid",
      "4": "pk_oid"
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "-level"
    ],
    "explanation": ""
  },
  {
    "id": "3c1b3153-f0c4-4794-ac8d-451cc651ada3",
    "question": "What is the significance of the 'oid' in system catalog tables?",
    "choices": {
      "1": "It's an object identifier, similar to sequences, used for unique identification.",
      "2": "It stands for 'original ID' and represents the first version of a record.",
      "3": "It indicates the order in which records were inserted.",
      "4": "It's a foreign key linking to other tables in the system catalog."
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "-level"
    ],
    "explanation": ""
  },



  /*

{
  "id": "",
  "question": "What will be the output of the following code?\n<code>...</code>",
  "type": "mc",
  "choices": {
    "1": "",
    "2": "",
    "3": "",
    "4": ""
  },
  "answer": "1",
  "tags": [
    "-level"
  ],
  "explanation": ""
},
*/
]
