<?php
declare(strict_types=1);

// Ironoc SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class IronocMakeContext
{
    public static function call(array $ctxmap, ?IronocContext $basectx): IronocContext
    {
        return new IronocContext($ctxmap, $basectx);
    }
}
