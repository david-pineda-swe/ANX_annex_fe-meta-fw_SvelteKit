<script lang="ts">
	import Card from "@annexjs/ui/copy/card.svelte";
	import { smoothScroll } from "@annexjs/uitils";
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="content">
	<h1>About this app</h1>

	<a href="#scroll-to-test-link" on:click={smoothScroll}>MIDDLE</a> <br/>
	<a href="#test-copy-card" on:click={smoothScroll}>COPY CARD</a>
	<hr/>
	<button on:click={(event) => smoothScroll(event, 'BOTTOM')}>BOTTOM</button>

	<p>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	<!-- TODO lose the @next! -->
	<pre>npm init svelte@next</pre>

	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>

	<h1>Atqui reperies, inquit, in hoc quidem pertinacem;</h1>

	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hosne igitur laudas et hanc eorum, inquam, sententiam sequi nos censes oportere? Idcirco enim non desideraret, quia, quod dolore caret, id in voluptate est. Quare hoc videndum est, possitne nobis hoc ratio philosophorum dare. Duo Reges: constructio interrete. Saepe ab Aristotele, a Theophrasto mirabiliter est laudata per se ipsa rerum scientia; <a href='http://loripsum.net/' target='_blank'>Ut aliquid scire se gaudeant?</a> Quasi ego id curem, quid ille aiat aut neget. An est aliquid, quod te sua sponte delectet? Cur iustitia laudatur? Primum cur ista res digna odio est, nisi quod est turpis? </p>

	<p>Dempta enim aeternitate nihilo beatior Iuppiter quam Epicurus; Voluptatem cum summum bonum diceret, primum in eo ipso parum vidit, deinde hoc quoque alienum; Hanc ergo intuens debet institutum illud quasi signum absolvere. Septem autem illi non suo, sed populorum suffragio omnium nominati sunt. Quid de Platone aut de Democrito loquar? Ratio quidem vestra sic cogit. </p>

	<p>Serpere anguiculos, nare anaticulas, evolare merulas, cornibus uti videmus boves, nepas aculeis. Potius ergo illa dicantur: turpe esse, viri non esse debilitari dolore, frangi, succumbere. Alterum significari idem, ut si diceretur, officia media omnia aut pleraque servantem vivere. Quo modo autem optimum, si bonum praeterea nullum est? Dicet pro me ipsa virtus nec dubitabit isti vestro beato M. <a href='http://loripsum.net/' target='_blank'>Duo enim genera quae erant, fecit tria.</a> Pisone in eo gymnasio, quod Ptolomaeum vocatur, unaque nobiscum Q. Hoc dixerit potius Ennius: Nimium boni est, cui nihil est mali. </p>


	<Card
		cardConfigType="DEFAULT"
		cardId="test-copy-card"
		cardTheme="base"
		cardClass="test-class">
		<h2 slot="header">Memini vero, inquam;</h2>

		<slot slot="content">
			<p>Cum autem in quo sapienter dicimus, id a primo rectissime dicitur. Quodcumque in mentem incideret, et quodcumque tamquam occurreret. Nec tamen ille erat sapiens quis enim hoc aut quando aut ubi aut unde? Obsecro, inquit, Torquate, haec dicit Epicurus? An tu me de L. Quod praeceptum quia maius erat, quam ut ab homine videretur, idcirco assignatum est deo. Utilitatis causa amicitia est quaesita. Qui ita affectus, beatum esse numquam probabis; Simus igitur contenti his. </p>

			<h3>-, sed ut hoc iudicaremus, non esse in iis partem maximam positam beate aut secus vivendi.</h3>
		
			<p>Sic enim maiores nostri labores non fugiendos tristissimo tamen verbo aerumnas etiam in deo nominaverunt. <a href='http://loripsum.net/' target='_blank'>Maximus dolor, inquit, brevis est.</a> Istic sum, inquit. Quod autem principium officii quaerunt, melius quam Pyrrho; </p>
		</slot>

		<slot slot="extra">
			Footer note and extra content
		</slot>
	</Card>

	<h4 id="scroll-to-test-link">THIS IS THE TARGET TEST LINK FOR SCROLL ra virtutem habeatur in bonis.</h4>

	<p>Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit? Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Dicet pro me ipsa virtus nec dubitabit isti vestro beato M. Nulla profecto est, quin suam vim retineat a primo ad extremum. <a href='http://loripsum.net/' target='_blank'>Obsecro, inquit, Torquate, haec dicit Epicurus?</a> Inde sermone vario sex illa a Dipylo stadia confecimus. Tum mihi Piso: Quid ergo? Hoc Hieronymus summum bonum esse dixit. Vide, quantum, inquam, fallare, Torquate. Mihi, inquam, qui te id ipsum rogavi? Cur iustitia laudatur? <a href='http://loripsum.net/' target='_blank'>Cur id non ita fit?</a> </p>

	<p>Pollicetur certe. Et non ex maxima parte de tota iudicabis? Si alia sentit, inquam, alia loquitur, numquam intellegam quid sentiat; Iam in altera philosophiae parte. Et quidem iure fortasse, sed tamen non gravissimum est testimonium multitudinis. Hunc vos beatum; Quonam, inquit, modo? Num igitur eum postea censes anxio animo aut sollicito fuisse? </p>

	<h1 >Atqui reperies, inquit, in hoc quidem pertinacem;</h1>

	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hosne igitur laudas et hanc eorum, inquam, sententiam sequi nos censes oportere? Idcirco enim non desideraret, quia, quod dolore caret, id in voluptate est. Quare hoc videndum est, possitne nobis hoc ratio philosophorum dare. Duo Reges: constructio interrete. Saepe ab Aristotele, a Theophrasto mirabiliter est laudata per se ipsa rerum scientia; <a href='http://loripsum.net/' target='_blank'>Ut aliquid scire se gaudeant?</a> Quasi ego id curem, quid ille aiat aut neget. An est aliquid, quod te sua sponte delectet? Cur iustitia laudatur? Primum cur ista res digna odio est, nisi quod est turpis? </p>

	<p>Dempta enim aeternitate nihilo beatior Iuppiter quam Epicurus; Voluptatem cum summum bonum diceret, primum in eo ipso parum vidit, deinde hoc quoque alienum; Hanc ergo intuens debet institutum illud quasi signum absolvere. Septem autem illi non suo, sed populorum suffragio omnium nominati sunt. Quid de Platone aut de Democrito loquar? Ratio quidem vestra sic cogit. </p>

	<p>Serpere anguiculos, nare anaticulas, evolare merulas, cornibus uti videmus boves, nepas aculeis. Potius ergo illa dicantur: turpe esse, viri non esse debilitari dolore, frangi, succumbere. Alterum significari idem, ut si diceretur, officia media omnia aut pleraque servantem vivere. Quo modo autem optimum, si bonum praeterea nullum est? Dicet pro me ipsa virtus nec dubitabit isti vestro beato M. <a href='http://loripsum.net/' target='_blank'>Duo enim genera quae erant, fecit tria.</a> Pisone in eo gymnasio, quod Ptolomaeum vocatur, unaque nobiscum Q. Hoc dixerit potius Ennius: Nimium boni est, cui nihil est mali. </p>

	<h2>Memini vero, inquam;</h2>

	<p>Cum autem in quo sapienter dicimus, id a primo rectissime dicitur. Quodcumque in mentem incideret, et quodcumque tamquam occurreret. Nec tamen ille erat sapiens quis enim hoc aut quando aut ubi aut unde? Obsecro, inquit, Torquate, haec dicit Epicurus? An tu me de L. Quod praeceptum quia maius erat, quam ut ab homine videretur, idcirco assignatum est deo. Utilitatis causa amicitia est quaesita. Qui ita affectus, beatum esse numquam probabis; Simus igitur contenti his. </p>

	<h3>-, sed ut hoc iudicaremus, non esse in iis partem maximam positam beate aut secus vivendi.</h3>

	<p>Sic enim maiores nostri labores non fugiendos tristissimo tamen verbo aerumnas etiam in deo nominaverunt. <a href='http://loripsum.net/' target='_blank'>Maximus dolor, inquit, brevis est.</a> Istic sum, inquit. Quod autem principium officii quaerunt, melius quam Pyrrho; </p>

	<h4>Si quicquam extra virtutem habeatur in bonis.</h4>

	<p>Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit? Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Dicet pro me ipsa virtus nec dubitabit isti vestro beato M. Nulla profecto est, quin suam vim retineat a primo ad extremum. <a href='http://loripsum.net/' target='_blank'>Obsecro, inquit, Torquate, haec dicit Epicurus?</a> Inde sermone vario sex illa a Dipylo stadia confecimus. Tum mihi Piso: Quid ergo? Hoc Hieronymus summum bonum esse dixit. Vide, quantum, inquam, fallare, Torquate. Mihi, inquam, qui te id ipsum rogavi? Cur iustitia laudatur? <a href='http://loripsum.net/' target='_blank'>Cur id non ita fit?</a> </p>

	<p>Pollicetur certe. Et non ex maxima parte de tota iudicabis? Si alia sentit, inquam, alia loquitur, numquam intellegam quid sentiat; Iam in altera philosophiae parte. Et quidem iure fortasse, sed tamen non gravissimum est testimonium multitudinis. Hunc vos beatum; Quonam, inquit, modo? Num igitur eum postea censes anxio animo aut sollicito fuisse? </p>

	<button on:click={(event) => smoothScroll(event, 'TOP')}>TOP</button>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>