<?php

class Musician
{
    private ?string $name = null;
    private ?int $year_became_known = null;
    private ?string $genre = null;
    private ?string $image = null;

    public array $albums = [];

    public function __construct($name, $year_was_born, $genre, $image)
    {
        $this->name = $name;
        $this->year_became_known = $year_was_born;
        $this->genre = $genre;
        $this->image = $image;
    }

    public function getProperty($property_name): int|string|array
    {
        return $this->$property_name;
    }

    public function setProperty($property_name, $new_value): void
    {
        $this->$property_name = $new_value;
    }

    public function  addNewAlbum($album)
    {
        $this->albums[] =$album;
    }

}