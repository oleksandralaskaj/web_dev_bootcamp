<?php
require_once "Person.php";

$old_array = [
    [
        'name' => 'Bruce',
        'surname' => 'Wayne',
        'occupation' => 'billionaire'
    ],
    [
        'name' => 'Clark',
        'surname' => 'Kent',
        'occupation' => 'reporter'
    ],
    [
        'name' => 'Peter',
        'surname' => 'Parker',
        'occupation' => 'photographer'
    ]
];

function transform($item_array): array
{
    return ['full_name' => "{$item_array['name']} {$item_array['surname']}",
        'job' => "{$item_array['occupation']}"];
}

$new_array = array_map('transform', $old_array);

$persons_array = array_map(function ($person_data): Person {
    return new Person($person_data);}, $old_array);
 ?>

<ul>New array items:
    <?php foreach ($new_array as $person):?>
        <li><?= $person["full_name"]?> is <?= $person["job"]?>.</li>
    <?php endforeach;?>
</ul>
<ul>Persons class array items:
    <?php foreach ($persons_array as $person):?>
        <li><?= $person->name?> <?= $person->surname?> is <?= $person->occupation?>.</li>
    <?php endforeach;?>
</ul>

