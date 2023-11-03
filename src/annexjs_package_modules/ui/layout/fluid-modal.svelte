	<script lang="ts">
		import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "sveltestrap";
		// TODO - Add named slots for modal header and footer


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
		<ModalBody>
			<slot/>
		</ModalBody>
	</Modal>