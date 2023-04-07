const usersGenerator = (count) =>  {
  const array = []

  for (let i = 1; i <= count; i++) {
    array.push({ name: 'John', surname: `Doe - ${i}` })
  }

  return array
}

const getPartData = (data, count) => {
  const part = data.splice(0, count)

  return {
    part,
    remaining: data
  }
}

const counter = (current, max) => current === max ? 1 : current + 1

export {
  usersGenerator,
  getPartData,
  counter
}