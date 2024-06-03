<?php

class Author
{
    private ?string $name = null;
    private ?string $surname = null;
    private ?int $year_was_born = null;
    private ?string $genre = null;

    public function __construct($name, $surname, $year_was_born, $genre)
    {
        $this->name = $name;
        $this->surname = $surname;
        $this->year_was_born = $year_was_born;
        $this->genre = $genre;
    }

    public function getProperty($property_name)
    {
        return $this->$property_name;
    }

    public function setProperty($property_name, $new_value)
    {
        $this->$property_name = $new_value;
    }

}