<?php

namespace App\Forms;

use Nette;
use Nette\Application\UI\Form;

class ContactFormFactory
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
		$form->addText('name')->setRequired('Name is required');
		$form->addTextArea('message')->setRequired('Message is required');
		$form->addSubmit('submitButton', 'Send message');

		return $form;
	}
}
