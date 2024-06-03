<?php
require  "Author.php";

$author = new Author("Jorge", "Collins", 1990, "fantasy");

$author->setProperty("name", "Michael");
echo $author->getProperty("name");