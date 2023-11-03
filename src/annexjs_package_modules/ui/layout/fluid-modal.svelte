	<script lang="ts">
		import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "sveltestrap";

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
		<!-- <ModalHeader toggle={toggleModal}>Modal title</ModalHeader> -->
		<ModalBody>
			Sample text for FLUID_MODAL
		</ModalBody>
		<!-- <ModalFooter>
			<Button color="secondary" on:click={toggleModal}>Cancel</Button>
		</ModalFooter> -->
	</Modal>