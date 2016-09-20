<?php

namespace App\Forms;

use Nette;
use Nette\Application\UI\Form;

class JobFormFactory
{
	use Nette\SmartObject;

	private $formFactory;

	/**
	 * TeamSignUpFormFactory constructor.
	 * @param $formFactory
	 */
	public function __construct(FormFactory $formFactory)
	{
		$this->formFactory = $formFactory;
	}

	/**
	 * @return Form
	 */
	public function create()
	{
		$form = $this->formFactory->create();
		$form->addText('name')->setRequired('Name is required');
		$form->addEmail('email')->setRequired('E-mail is required');
		$form->addUpload('cv');
		$form->addTextArea('linkedInUrl');
		$form->addTextArea('message');
		$form->addSubmit('submitButton', 'Apply for position');

		return $form;
	}
}
