<?php

// Possibility to edit / remove files from other user then www-data
umask(0002);

require __DIR__ . '/../vendor/autoload.php';

$configurator = new Nette\Configurator;

$configurator->setDebugMode(['10.10.10.1']);

if (isset($_ENV['DEBUG']) && $_ENV['DEBUG']) {
	$configurator->setDebugMode(TRUE);
}

$configurator->enableDebugger(__DIR__ . '/../log', 'martin.mika@green-light.com');

$configurator->setTimeZone('Europe/Prague');
$configurator->setTempDirectory(__DIR__ . '/../temp');

$configurator->createRobotLoader()
	->addDirectory(__DIR__)
	->register();

$configurator->addConfig(__DIR__ . '/config/config.neon');
if (file_exists(__DIR__ . '/config/config.local.neon')) {
	$configurator->addConfig(__DIR__ . '/config/config.local.neon');
}

$container = $configurator->createContainer();

return $container;
