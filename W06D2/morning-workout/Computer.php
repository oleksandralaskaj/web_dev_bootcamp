<?php

class Computer
{
    public ?string $model = null;
    public ?string $operating_system = null;
    public ?bool $is_portable = false;
    public ?string $status = "off";

    public function toggleSwitch():void
    {
        switch ($this->status) {
            case "on": $this->status= "off";
                break;
            case "off": $this->status= "on";
        }
    }
}