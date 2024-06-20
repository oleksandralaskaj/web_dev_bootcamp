<?php

class Dog {

    public $natural_enemies;
    protected $position;
    protected $name;

    public function __construct($name)
    {
        $this->position = "standing";
        $this->name = $name;
    }

    public function barkAt($object)
    {
        if (in_array("literally everything", $this->natural_enemies) ||
            in_array(strtolower($object), $this->natural_enemies)
        ) {
            return "WOOF, WOOF, WOOF!!!!! >:(";
        } else {
            return "woof";
        }
    }

    public function readDogTag()
    {
        return $this->name;
    }

    public function sit()
    {
        $this->position = "sitting";
        return "Sit, ".$this->name."!";
    }

    public function getPosition()
    {
        return $this->position;
    }
}

class Dalmatian extends Dog
{
    public function __construct($name, $natural_enemies = [])
    {
        $this->position = "standing";
        $this->name = $name;
        $this->natural_enemies = array_merge(["cruela deville"], $natural_enemies);
    }
}

class Chihuahua extends Dog
{
    public function __construct($name, $natural_enemies = [])
    {
        $this->position = "standing";
        $this->name = $name;
        $this->natural_enemies = $natural_enemies;
    }

    public function sit()
    {
        $this->position = "still standing but now staring defiantly";
        return "Sit, ".$this->name."!";
    }
}

// DEFINE THE CHIHUAHUA CLASS HERE

$first_dog = new Dalmatian("Spot",["cat"]);
?>

<h3>Our good boi dalmatian</h3>
<p>Dalmatian goes <?= $first_dog->barkAt("Cruela deVille") ?> at Cruela deVille</p>
<p>Dalmatian goes <?= $first_dog->barkAt("cat") ?> at a cat</p>
<p>Dalmatian goes <?= $first_dog->barkAt("human") ?> at a human</p>

<p>Dalmatian is <?= $first_dog->getPosition() ?></p>
<?php
echo "<p>".$first_dog->sit()."</p>";
?>
<p>Dalmatian is <?= $first_dog->getPosition() ?></p>

<hr>

<h3>Our fury rat chihuahua</h3>

<?php $second_dog = new Chihuahua('Rory', ["literally everything"] ); ?>

<p>Chihuahua's name is <?= $second_dog->readDogTag() ?></p>
<p>Chihuahua goes <?= $second_dog->barkAt('literally everything') ?> at <i>whatever you can think of</i></p>
<p>Chihuahua is <?= $second_dog->getPosition() ?></p>
<?php
echo "<p>".$second_dog->sit()."</p>"
?>
<p>Chihuahua is <?= $second_dog->getPosition() ?></p>

