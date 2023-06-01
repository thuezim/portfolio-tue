import React from 'react'
const contato = () => {
return (
<div>
<div class="linha">
<section>
<div class="coluna col5">
<h3>Localização</h3>
<img src="img/mapa.jpg" alt="" />
<ul class="sem-padding sem-marcador">
<li>Rua Nova Nipônia</li>
<li>Bairro Nova Cotia</li>
<li>Cotia, SP</li>
</ul>
<h3>Contato direto</h3>
<ul class="sem-padding sem-marcador">
<li>Fone: <strong>(11) 987530221</strong></li>
<li>E-mail: <strong>matheusin078@gmail</strong></li>
<li>Instagram: <strong>@thuezim.snowflake</strong></li>
</ul>
</div>
<div class="coluna col7 contato">
<h2>Envie uma mensagem</h2>
<form action="">
<label for="nome">Seu nome:</label>
<input type="text" name="nome" id="nome" />
<label>Seu e-mail:</label>
<input type="text" name="email" id="email" />
<label>Assunto:</label>
<input type="text" name="assunto" id="assunto" />
<label>Mensagem:</label>
<textarea name="menasgem" id="mensagem"></textarea>
<input type="submit" class="botao" name="enviar"
value="Enviar mensagem &raquo;" />
</form>
</div>
</section>
</div>
</div>
)
}
export default contato;
