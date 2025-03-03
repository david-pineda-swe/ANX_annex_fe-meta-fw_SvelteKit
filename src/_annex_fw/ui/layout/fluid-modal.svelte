	<script lang="ts">
		import { Modal, ModalHeader, ModalBody, ModalFooter } from '@sveltestrap/sveltestrap';

		export let modalIsOpen: boolean;
		export let modalSize: string;
		export let modalFullscreen: boolean;
		export let toggleModal: any;
	</script>

	<Modal
		isOpen={modalIsOpen}
		size={modalSize}
		fullscreen={modalFullscreen}
		toggle={toggleModal}
	>
		{#if $$slots["modal-header"]}
			<ModalHeader toggle={toggleModal}>
				<slot name="modal-header"/>
			</ModalHeader>
		{/if}

		<ModalBody>
			<slot/>
		</ModalBody>

		{#if $$slots["modal-footer"]}
			<ModalFooter>
				<slot name="modal-footer"/>
			</ModalFooter>
		{/if}
	</Modal>