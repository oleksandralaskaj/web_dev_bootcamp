<?php

class Person
{
    public ?string $name = null;
    public ?string $surname = null;
    public ?string $occupation = null;

    public function __construct($person_data)
    {
        $this->name = $person_data['name'];
        $this->surname = $person_data['surname'];
        $this->occupation = $person_data['occupation'];
    }
}