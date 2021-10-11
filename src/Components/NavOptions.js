import React, { useState, useEffect } from 'react'
import NavCard from './NavCard.js'
import '../styles/NavOptions.css'

const NavOptions = ({
  miPhones,
  redmiPhones,
  tv,
  laptop,
  fitnessAndLifeStyle,
  home,
  audio,
  accessories,
}) => {
  const [miPhoneToggle, setMiPhoneToggle] = useState(false);
  const [redmiPhoneToggle, setRedmiPhoneToggle] = useState(false);
  const [tvToggle, setTvToggle] = useState(false);
  const [laptopToggle, setLaptopToggle] = useState(false);
  const [fitnessToggle, setFitnessToggle] = useState(false);
  const [homeToggle, setHomeToggle] = useState(false);
  const [audioToggle, setAudioToggle] = useState(false);
  const [accessoriesToggle, setAccessoriesToggle] = useState(false);

  useEffect(() => {
    if (window.location.pathname === '/miphones') {
      return setMiPhoneToggle(true)
    }
    if (window.location.pathname === '/redmiphones') {
      return setRedmiPhoneToggle(true)
    }
    if (window.location.pathname === '/tv') {
      return setTvToggle(true)
    }
    if (window.location.pathname === '/laptop') {
      return setLaptopToggle(true)
    }
    if (window.location.pathname === '/fitness') {
      return setFitnessToggle(true)
    }
    if (window.location.pathname === '/home') {
      return setHomeToggle(true)
    }
    if (window.location.pathname === '/audio') {
      return setAudioToggle(true)
    }
    if (window.location.pathname === '/accessories') {
      return setAccessoriesToggle(true)
    }
  }, [])
  return (
    <div className='NavOptions'>
      {miPhoneToggle
        ? miPhones.map((item) => (
            <NavCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))
        : null}
      {redmiPhoneToggle
        ? redmiPhones.map((item) => (
            <NavCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))
        : null}
      {tvToggle
        ? tv.map((item) => (
            <NavCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))
        : null}
      {laptopToggle
        ? laptop.map((item) => (
            <NavCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))
        : null}
      {fitnessToggle
        ? fitnessAndLifeStyle.map((item) => (
            <NavCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))
        : null}
      {homeToggle
        ? home.map((item) => (
            <NavCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))
        : null}
      {audioToggle
        ? audio.map((item) => (
            <NavCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))
        : null}
      {accessoriesToggle
        ? accessories.map((item) => (
            <NavCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))
        : null}
    </div>
  )
}

export default NavOptions
