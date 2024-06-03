<?php

class Album
{
    public ?string $title = null;
    public ?string $author = null;
    public ?int $year_of_release = null;
    public ?array $tracks = [];
    public ?int $number_of_tracks = null;

    public function __construct($title, $author, $year_of_release, $tracks)
    {
        $this->title = $title;
        $this->author = $author;
        $this->year_of_release = $year_of_release;
        $this->tracks = $tracks;
    }

    protected function calculateNumberOfTracts(): void
    {
        $this->number_of_tracks = count($this->tracks);
    }
}