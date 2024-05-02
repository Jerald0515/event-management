import {
    gql,
    request
} from "graphql-request"

const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/cluz6p62n0zyu08w465ye0cox/master";

export const getEventList = async () => {
    const query = gql `
    query MyQuery {
        events {
          title
          image {
            url
          }
          description
        }
      }
      `


    const result = await request(MASTER_URL, query);
    return result;
}

export const createBooking = async (formValue) => {
  const mutationQuery = `
    mutation MyMutation {
      createBooking(
        data: {
          name: "${formValue.name}", 
          mailId: "${formValue.mailId}", 
          contactNumber: "${formValue.contactNumber}", 
          eventTime: "${formValue.eventTime}", 
          eventDate: "${formValue.eventDate}",  
        }
      ) {
        id
      }
    }
  `;
  
    const result = await request(MASTER_URL, mutationQuery);
    return result;
};