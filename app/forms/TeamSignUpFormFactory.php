<?php

namespace App\Forms;

use Nette;
use Nette\Application\UI\Form;

class TeamSignUpFormFactory
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
		$form->addEmail('email')->setRequired('E-mail is required');
		$form->addSubmit('submitButton', 'Sign up');

		return $form;
	}
}
