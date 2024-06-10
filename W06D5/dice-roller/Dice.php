<?php

class Dice
{
    public ?int $sides = null;
    public ?int $result = null;

    public function __construct()
    {
        $this->roll();
    }

    public function roll()
    {
        $this->result = rand(1, $this->sides);
    }

    public function __toString()
    {
        return "<div style='height: 30px; width: 30px; display: inline-block; text - align: center; border: 1px solid black; font - size: 24px; line - height: 30px;'> {$this->result} </div>";
    }
}


class Dice4 extends Dice
{
    public ?int $sides = 4;
}
class Dice6 extends Dice
{
    public ?int $sides = 6;
}
class Dice10 extends Dice
{
    public ?int $sides = 10;
}
class Dice20 extends Dice
{
    public ?int $sides = 20;
}