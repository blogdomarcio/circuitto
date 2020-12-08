import React from 'react'

const Noticias = () => {
    return (

        <div className='container p-2 grid grid-cols-1  md:grid-cols-6'>




            <div className='p-3 shadow col-span-1 md:col-span-3'>

                <p className='font-bold p-3 text-center'> JESULINO PORTO DESCONSTRÓI CULTURA DE NÃO REELEIÇÃO </p>
                <img src='/jesulino.jpg' className='p-2 w-2/2 shadow-xl mx-auto' />

                <p className='text-base p-3'>Desde a sua emancipação em 16 de julho de 1962, nenhum prefeito ou prefeita,  conseguiu se reeleger no município de Maiquinique BA. Quebrando esse paradigma  no dia 15 de novembro de 2020,  Jesulino Porto e Dra. Zaza do partido DEM- 25 vencem os candidatos do partido PTN-19, Padre Reinaldo e Valéria Silveira</p>


            </div>

            <div>

                <img src='/joias.png' className='mx-auto m-2 w-full md:hidden lg:hidden ' />

            </div>

            <div className='p-3 shadow  col-span-1 md:col-span-3'>

                <p className='font-bold p-3 text-center'> Com a sua reeleição no dia 15 de novembro de 2020, Chico Batore vai para o seu terceiro mandato de vereador. </p>

                <img className='p-2 w-2/2 mx-auto shadow-xl' src='/batore.jpg' title='Vereador presidente Lourisvaldo Rodrigues de Souza, Chico Batore' />

                <p className='text-base p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat, risus id mattis elementum, massa quam tristique massa, eu ullamcorper tortor leo a quam. Nam lacinia in est non dictum. Vivamus volutpat felis lorem, ullamcorper maximus dui finibus sit amet. Sed id neque quis felis ultrices interdum sit amet sit amet sapien. Nam vel metus ornare urna sodales efficitur ac nec neque. Proin eu diam commodo, vestibulum ipsum id, suscipit sem. Donec tempor lorem orci, eu interdum dolor luctus eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse dapibus dui massa, non bibendum magna sodales nec. Mauris dictum, sem ac sollicitudin aliquam, eros lorem pulvinar nulla, sit amet vulputate est odio id ante. Donec laoreet metus id magna condimentum condimentum. Suspendisse luctus interdum nulla, vel cursus mi suscipit eu. Integer vestibulum odio sit amet lorem sodales suscipit. Vestibulum scelerisque nunc vel ex accumsan sodales.</p>


            </div>

            <div>

                <img src='/ma.png' className='mx-auto w-full md:hidden lg:hidden m-2' />

                <img src='/ma.png' className='mx-auto w-full hidden md:max-w-sm  md:contents lg:contents lg:max-w-sm m-2' />

            </div>



            <div className=''>

                {/* <p>sssss</p> */}

                <div className='bg-red-900 p-8 text-white text-center'>Desenvolvimento: @blogdomarcio </div>

            </div>

        </div>

    )
}

export default Noticias