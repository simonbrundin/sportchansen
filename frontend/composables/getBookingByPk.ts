export default async function (id: string) {
  // QUERY och PARAMETERS ändras i varje request
  const QUERY = gql`
    query MyQuery($id: Int!) {
      booking_by_pk(id: $id) {
        booking_time
        court_id
        door_code
        duration
        facility {
          id
          name
        }
        start_time
        payment {
          id
        }
      }
    }
  `;
  const PARAMETERS = { id: id };

  // Allt härifrån och ner lämnas som det är
  const objectType = QUERY.definitions[0].selectionSet.selections[0].name.value;

  interface Data {
    value?: Record<string, unknown> | null;
    // add any other properties that you expect the data object to have
  }
  const { data }: { data?: Data } = await useAsyncQuery(QUERY, PARAMETERS);

  // const { data } = await useAsyncQuery(QUERY, PARAMETERS);
  // return data.value[objectType];
  if (data?.value && data.value[objectType]) {
    return data.value[objectType] as any;
  } else {
    return;
    // handle the case where the data is not defined or does not contain the expected property
  }
}
