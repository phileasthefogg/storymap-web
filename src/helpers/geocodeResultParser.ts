export const parseGeocodeResult = (res: any) => {
  console.log(res);
  let marker;
  const type = res.place_type[0];
  if (type === "address") {
    marker = {
      address: {
        st_num: res.address,
        st_name: res.text,
        zip: res.context.filter((r: any) => r.id.startsWith("postcode"))[0]
          .text,
      },
    };
  } else if (type === "poi") {
    marker = {
      address: {
        st_num: res.properties.address.slice(
          0,
          res.properties.address.indexOf(" ")
        ),
        st_name: res.properties.address.slice(
          res.properties.address.indexOf(" ") + 1
        ),
        zip: res.context.filter((r: any) => r.id.startsWith("postcode"))[0]
          .text,
      },
      place: {
        name: res.text,
      },
    };
  }
  console.log(marker);
  return marker;
};
