import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Flex,
  Box,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";

interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
}

function CardComp() {
  const [data, setData] = useState<Game[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async (pageNum: number) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.rawg.io/api/games?key=28079341cb1c4294b3c719bf9601ebc2&page=${pageNum}`
      );
      setData(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  return (
    <Box>
      <Flex wrap="wrap" justify="center" gap="5" m="5">
        {loading ? (
          <Text>Loading games...</Text>
        ) : data.length > 0 ? (
          data.map((game) => (
            <Card
              key={game.id}
              maxW="xs"
              boxShadow="5px 5px 5px rgba(0,0,0,0.2)"
              backgroundColor="ghostwhite"
            >
              <CardBody>
                <Image src={game.background_image} borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md" color="black">
                    {game.name}
                  </Heading>
                  <Text fontSize="sm" color="black">
                    {"⭐".repeat(Math.round(game.rating))}
                  </Text>
                </Stack>
              </CardBody>
              <Divider color="black" />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" backgroundColor={'black'} colorScheme="blackAlpha">
                    Play Now
                  </Button>
                  <Button variant="ghost" colorScheme="blackAlpha" color={'black'}>
                    Add to Wishlist
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))
        ) : (
          <Text>No games found.</Text>
        )}
      </Flex>

      {/* Pagination UI */}
      <Flex justify="center" mt={5} gap={3} marginBottom={6} marginTop={8}>
        <Button
          isDisabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          colorScheme="blackAlpha"
          backgroundColor={'black'}
        >
          Previous
        </Button>
        <Text fontSize="lg" fontWeight={'500'} margin={2}>PAGE {page}</Text>
        <Button onClick={() => setPage((prev) => prev + 1)} colorScheme="blackAlpha" backgroundColor={'black'}>
          Next
        </Button>
      </Flex>
    </Box>
  );
}

export default CardComp;
