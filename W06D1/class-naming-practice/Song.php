<?php

class Song
{
    public ?string $title = null;
    public ?int $year_of_release = null;
    public ?int $duration = null;

    public function __construct($title, $year_of_release, $duration)
    {
        $this->title = $title;
        $this->year_of_release = $year_of_release;
        $this->duration = $duration;
    }

    public function getProperty($property_name): int|string
    {
        return $this->$property_name;
    }

    public function setProperty($property_name, $new_value): void
    {
        $this->$property_name = $new_value;
    }
}