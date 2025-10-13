import React from 'react';
import {
  Box,            // Универсальный контейнер
  Heading,        // Для заголовков
  Text,           // Для параграфов
  Container,      // Ограничивает ширину контента
  VStack,         // Вертикальный стек (для вертикального расположения элементов)
  HStack,         // Горизонтальный стек (для горизонтального расположения элементов)
  Flex,           // Для гибких макетов (например, текст и изображение рядом)
  Image,          // Для изображений
  Button,         // Для кнопок
  Separator,        // Для горизонтальных разделителей
  // useColorModeValue, // Стандартный хук Chakra UI, если не используете кастомный
} from '@chakra-ui/react';

// Предполагаем, что этот импорт правильный, если вы переопределили useColorModeValue
// Если нет, то нужно импортировать из '@chakra-ui/react'
import { useColorModeValue } from "./ui/color-mode";

const KlyazmaEmbankmentBody = () => {
  // Определяем цвета, аналогично вашим предыдущим компонентам
  const mainBg = useColorModeValue('gray.50', 'gray.900'); // Основной фон страницы
  const sectionBg = useColorModeValue('white', 'gray.800'); // Фон для отдельных секций
  const primaryText = useColorModeValue('gray.800', 'whiteAlpha.900'); // Основной цвет текста
  const secondaryText = useColorModeValue('gray.600', 'gray.400'); // Второстепенный цвет текста
  const accentColor = useColorModeValue('teal.500', 'cyan.500'); // Акцентный цвет (для заголовков, кнопок)
  const accentHoverColor = useColorModeValue('teal.600', 'cyan.400'); // Акцентный цвет при наведении
  const separatorColor = useColorModeValue('gray.200', 'gray.700'); // Цвет разделителя

  return (
    <Box bg={mainBg} color={primaryText} minH="calc(100vh - 100px)" py={{ base: 8, md: 12 }}>
      <Container maxW="container.lg">
        <VStack spacing={{ base: 10, md: 16 }} align="stretch">

          {/* Секция 1: Вводная - Заголовок и краткое описание */}
          <Box textAlign="center" py={{ base: 8, md: 12 }} px={4} bg={sectionBg} borderRadius="lg" shadow="md">
            <Heading as="h1" size={{ base: 'xl', md: '2xl' }} mb={4} color={accentColor}>
              Набережная Клязьмы: Сердце Отдыха во Владимире
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} maxW="800px" mx="auto" color={secondaryText}>
              Откройте для себя живописные виды, историческое наследие и уютные уголки Набережной Клязьмы.
              Идеальное место для прогулок, активного отдыха и незабываемых моментов в сердце древнего города.
            </Text>
            <Button
              mt={8}
              colorScheme="teal" // Используем teal, который будет адаптирован useColorModeValue
              bg={accentColor}
              _hover={{ bg: accentHoverColor }}
              size="lg"
              onClick={() => console.log("Подробнее о набережной")}
            >
              Узнать больше
            </Button>
          </Box>

            <Separator borderColor={separatorColor} />

          {/* Секция 2: Описание набережной с изображением */}
          <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={8} p={8} bg={sectionBg} borderRadius="lg" shadow="md">
            <Box flex={1}>
              <Heading as="h2" size="xl" mb={4} color={accentColor}>
                Исторический Дух и Современный Комфорт
              </Heading>
              <Text fontSize="lg" lineHeight="tall" color={primaryText}>
                Набережная Клязьмы во Владимире — это не просто прогулочная зона, это живая часть истории города,
                с которой открываются потрясающие виды на реку Клязьму и окружающие ландшафты. Она является
                популярным местом для жителей и гостей города, предлагая возможности для спокойных прогулок,
                утренних пробежек и вечерних посиделок.
              </Text>
              <Text mt={4} fontSize="lg" lineHeight="tall" color={primaryText}>
                За последние годы набережная преобразилась, став более комфортной и современной, при этом
                сохранив свою уникальную атмосферу. Здесь можно увидеть старинные постройки,
                насладиться свежим воздухом и почувствовать связь с природой прямо в черте города.
              </Text>
            </Box>
            <Box flex={1} maxW={{ base: '100%', md: '50%' }}>
              <Image
                src="./src/assets/photo_5427336527853257374_y.jpg" // Placeholder изображение
                alt="Вид на Набережную Клязьмы"
                borderRadius="lg"
                shadow="xl"
                objectFit="cover"
                width="100%"
                height="auto"
              />
            </Box>
          </Flex>

            <Separator borderColor={separatorColor} />

          {/* Секция 3: Что можно найти на набережной (активности) */}
          <Box p={8} bg={sectionBg} borderRadius="lg" shadow="md">
            <Heading as="h2" size="xl" mb={8} textAlign="center" color={accentColor}>
              Чем заняться на Набережной?
            </Heading>
            <HStack spacing={{ base: 4, md: 8 }} wrap="wrap" justify="center">
              {/* Элемент активности 1 */}
              <VStack spacing={2} p={4} borderRadius="md" bg={useColorModeValue('gray.100', 'gray.700')} shadow="sm" minW="200px">
                <Text fontSize="4xl">🚶</Text>
                <Heading size="md" color={primaryText}>Прогулочные зоны</Heading>
                <Text textAlign="center" fontSize="sm" color={secondaryText}>
                  Обширные дорожки для пеших прогулок с красивыми видами.
                </Text>
              </VStack>
              {/* Элемент активности 2 */}
              <VStack spacing={2} p={4} borderRadius="md" bg={useColorModeValue('gray.100', 'gray.700')} shadow="sm" minW="200px">
                <Text fontSize="4xl">🚲</Text>
                <Heading size="md" color={primaryText}>Велосипедные дорожки</Heading>
                <Text textAlign="center" fontSize="sm" color={secondaryText}>
                  Комфортные трассы для любителей велосипедного спорта.
                </Text>
              </VStack>
              {/* Элемент активности 3 */}
              <VStack spacing={2} p={4} borderRadius="md" bg={useColorModeValue('gray.100', 'gray.700')} shadow="sm" minW="200px">
                <Text fontSize="4xl">🌳</Text>
                <Heading size="md" color={primaryText}>Зеленые насаждения</Heading>
                <Text textAlign="center" fontSize="sm" color={secondaryText}>
                  Парковые зоны и места для отдыха в тени деревьев.
                </Text>
              </VStack>
              {/* Элемент активности 4 */}
              <VStack spacing={2} p={4} borderRadius="md" bg={useColorModeValue('gray.100', 'gray.700')} shadow="sm" minW="200px">
                <Text fontSize="4xl">👨‍👩‍👧‍👦</Text>
                <Heading size="md" color={primaryText}>Детские площадки</Heading>
                <Text textAlign="center" fontSize="sm" color={secondaryText}>
                  Современные и безопасные зоны для игр самых маленьких.
                </Text>
              </VStack>
            </HStack>
          </Box>

            <Separator borderColor={separatorColor} />

          {/* Секция 4: Местоположение (с плейсхолдером для карты) */}
          <Box p={8} bg={sectionBg} borderRadius="lg" shadow="md" textAlign="center">
            <Heading as="h2" size="xl" mb={4} color={accentColor}>
              Где нас найти?
            </Heading>
            <Text fontSize="lg" mb={4} color={secondaryText}>
              Набережная Клязьмы расположена в исторической части Владимира, легко доступна
              как на общественном транспорте, так и пешком из центра города.
            </Text>
            <Button
              mt={8}
              colorScheme="teal"
              bg={accentColor}
              _hover={{ bg: accentHoverColor }}
              size="md"
              onClick={() => window.open("https://yandex.ru/maps/-/CLRUADYC", "_blank")} // Пример ссылки на Яндекс.Карты
            >
              Открыть на карте
            </Button>
          </Box>

        </VStack>
      </Container>
    </Box>
  );
};

export default KlyazmaEmbankmentBody;