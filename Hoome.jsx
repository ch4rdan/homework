import React from 'react';
import {
  Box,
  Flex,
  Text,
  Link,
  Stack,
  Heading,
  IconButton,
  Separator
} from '@chakra-ui/react';
import {
 useColorModeValue,
} from "../ui/color-mode"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const bgColor = useColorModeValue('gray.800', 'gray.900');
  const textColor = useColorModeValue('whiteAlpha.900', 'whiteAlpha.800');
  const headingLinkColor = useColorModeValue('teal.300', 'cyan.400');
  const hoverColor = useColorModeValue('teal.500', 'cyan.200');
  const SeparatorColor = useColorModeValue('gray.700', 'gray.700');
  const copyrightColor = useColorModeValue('gray.400', 'gray.500');

  return (
    <Box
      as="footer"
      bg={bgColor}
      color={textColor}
      py={{ base: 10, md: 12 }}
      px={{ base: 4, md: 8 }}
      borderTop="1px solid"
      borderColor={SeparatorColor}
      fontFamily="body"
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify={{ base: 'center', md: 'space-around' }}
        align={{ base: 'center', md: 'flex-start' }}
        maxW="1200px"
        mx="auto"
        wrap="wrap"
        gap={{ base: 8, md: 0 }}
      >
        <Box
          flex={{ base: '1', md: '0.3' }}
          minW={{ base: '100%', md: '250px' }}
          mb={{ base: 0, md: 0 }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Heading as="h3" size="md" color={headingLinkColor} mb={4}>
            О нас
          </Heading>
          <Text fontSize="sm" lineHeight="tall" maxW="300px" mx={{base: 'auto', md: '0'}}>
            Принимаются переводы на банковскую карту по номеру телефона 89046585321 на подерржку
          </Text>
        </Box>

        <Box
          flex={{ base: '1', md: '0.2' }}
          minW={{ base: '100%', md: '180px' }}
          mb={{ base: 0, md: 0 }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Heading as="h3" size="md" color={headingLinkColor} mb={4}>
            Быстрые ссылки
          </Heading>
          <Stack spacing={2} align={{ base: 'center', md: 'flex-start' }}>
            <Link href="/about" _hover={{ color: hoverColor }} color={textColor}>О компании</Link>
            <Link href="/services" _hover={{ color: hoverColor }} color={textColor}>Услуги</Link>
            <Link href="/contact" _hover={{ color: hoverColor }} color={textColor}>Контакты</Link>
            <Link href="/privacy" _hover={{ color: hoverColor }} color={textColor}>Политика конфиденциальности</Link>
          </Stack>
        </Box>

        <Box
          flex={{ base: '1', md: '0.2' }}
          minW={{ base: '100%', md: '200px' }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Heading as="h3" size="md" color={headingLinkColor} mb={4}>
            Мы в соцсетях
          </Heading>
          <Stack direction="row" spacing={4} justify={{ base: 'center', md: 'flex-start' }}>
            <IconButton
              as="a"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              icon={<FaFacebook size="20px" />}
              variant="ghost"
              color={textColor}
              _hover={{ color: hoverColor }}
            />
            <IconButton
              as="a"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              icon={<FaTwitter size="20px" />}
              variant="ghost"
              color={textColor}
              _hover={{ color: hoverColor }}
            />
            <IconButton
              as="a"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              icon={<FaInstagram size="20px" />}
              variant="ghost"
              color={textColor}
              _hover={{ color: hoverColor }}
            />
            <IconButton
              as="a"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              icon={<FaLinkedin size="20px" />}
              variant="ghost"
              color={textColor}
              _hover={{ color: hoverColor }}
            />
          </Stack>
        </Box>
      </Flex>

      <Separator mt={10} mb={6} borderColor={SeparatorColor} /> {/* Используем Separator */}

      <Text
        textAlign="center"
        fontSize="sm"
        color={copyrightColor}
      >
        &copy; {currentYear} Название Вашей Компании. Все права защищены.
      </Text>
    </Box>
  );
};

export default Footer;