import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

const ProductLinkEmail = ({ link }: { link: string }) => {
  return (
    <Html>
      <Head />
      <Preview>Your product is here!!!!</Preview>
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container>
            <Text className="text-2xl font-semibold">Hi Friend</Text>
            <Text className="text-muted-foreground text-lg">
              Thank you for purchasing our product. You can download it by
              clicking the button below.
            </Text>
            <Section className="w-full flex justify-center">
              <Button
                className="text-white bg-purple-500 rounded-lg px-10 py-4"
                href={link}
              >
                Download Product
              </Button>
              <Text>
                Best Regards, <br />
                Techcemart Team
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ProductLinkEmail;
