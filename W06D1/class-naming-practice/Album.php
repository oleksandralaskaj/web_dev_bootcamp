<?php

class Album
{
    public ?string $title = null;
    public ?string $author = null;
    public ?int $year_of_release = null;
    public ?array $tracks = [];
    public ?int $number_of_tracks = 0;

    public function __construct($title, $author, $year_of_release)
    {
        $this->title = $title;
        $this->author = $author;
        $this->year_of_release = $year_of_release;
    }

    public function calculateNumberOfTracts(): int
    {
        $this->number_of_tracks = count($this->tracks);
        return $this->number_of_tracks;
    }

    public function addTrack($track): void
    {
        $this->tracks[] = $track;
    }

    public function calculateLength()
    {
        $lenght = 0;
        foreach ($this->tracks as $track) {
            $lenght += $track->duration;
        }
        return $lenght;
    }
}