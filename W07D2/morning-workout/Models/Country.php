<?php

class Country
{
    public $id = null;
    public $code = null;
    public $code_alpha2 = null;
    public $name = null;
    public $continent = null;
    public $continent_id = null;
    public $region = null;
    public $surface_area = null;
    public $population = null;
    public $gnp = null;
    public $head_of_state = null;
    public $capital_city_id = null;

    public static function getCountryByCode(string $code): ?Country
    {
        return DB::selectOne('
            SELECT *
            FROM `countries`
            WHERE `code_alpha2` = ?
        ', [
            $code
        ], 'Country');
    }
}