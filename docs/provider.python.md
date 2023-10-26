# `provider`

Refer to the Terraform Registory for docs: [`consul`](https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-consul.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConsulProvider <a name="ConsulProvider" id="@cdktf/provider-consul.provider.ConsulProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs consul}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import provider

provider.ConsulProvider(
  scope: Construct,
  id: str,
  address: str = None,
  alias: str = None,
  auth_jwt: ConsulProviderAuthJwt = None,
  ca_file: str = None,
  ca_path: str = None,
  ca_pem: str = None,
  cert_file: str = None,
  cert_pem: str = None,
  datacenter: str = None,
  header: typing.Union[IResolvable, typing.List[ConsulProviderHeader]] = None,
  http_auth: str = None,
  insecure_https: typing.Union[bool, IResolvable] = None,
  key_file: str = None,
  key_pem: str = None,
  namespace: str = None,
  scheme: str = None,
  token: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.address">address</a></code> | <code>str</code> | The HTTP(S) API address of the agent to use. Defaults to "127.0.0.1:8500". |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.authJwt">auth_jwt</a></code> | <code><a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt">ConsulProviderAuthJwt</a></code> | auth_jwt block. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.caFile">ca_file</a></code> | <code>str</code> | A path to a PEM-encoded certificate authority used to verify the remote agent's certificate. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.caPath">ca_path</a></code> | <code>str</code> | A path to a directory of PEM-encoded certificate authority files to use to check the authenticity of client and server connections. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.caPem">ca_pem</a></code> | <code>str</code> | PEM-encoded certificate authority used to verify the remote agent's certificate. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.certFile">cert_file</a></code> | <code>str</code> | A path to a PEM-encoded certificate provided to the remote agent; requires use of `key_file` or `key_pem`. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.certPem">cert_pem</a></code> | <code>str</code> | PEM-encoded certificate provided to the remote agent; requires use of `key_file` or `key_pem`. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.datacenter">datacenter</a></code> | <code>str</code> | The datacenter to use. Defaults to that of the agent. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.header">header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.provider.ConsulProviderHeader">ConsulProviderHeader</a>]]</code> | header block. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.httpAuth">http_auth</a></code> | <code>str</code> | HTTP Basic Authentication credentials to be used when communicating with Consul, in the format of either `user` or `user:pass`. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.insecureHttps">insecure_https</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Boolean value to disable SSL certificate verification; |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.keyFile">key_file</a></code> | <code>str</code> | A path to a PEM-encoded private key, required if `cert_file` or `cert_pem` is specified. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.keyPem">key_pem</a></code> | <code>str</code> | PEM-encoded private key, required if `cert_file` or `cert_pem` is specified. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#namespace ConsulProvider#namespace}. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.scheme">scheme</a></code> | <code>str</code> | The URL scheme of the agent to use ("http" or "https"). Defaults to "http". |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.token">token</a></code> | <code>str</code> | The ACL token to use by default when making requests to the agent. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.address"></a>

- *Type:* str

The HTTP(S) API address of the agent to use. Defaults to "127.0.0.1:8500".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#address ConsulProvider#address}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#alias ConsulProvider#alias}

---

##### `auth_jwt`<sup>Optional</sup> <a name="auth_jwt" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.authJwt"></a>

- *Type:* <a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt">ConsulProviderAuthJwt</a>

auth_jwt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#auth_jwt ConsulProvider#auth_jwt}

---

##### `ca_file`<sup>Optional</sup> <a name="ca_file" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.caFile"></a>

- *Type:* str

A path to a PEM-encoded certificate authority used to verify the remote agent's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#ca_file ConsulProvider#ca_file}

---

##### `ca_path`<sup>Optional</sup> <a name="ca_path" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.caPath"></a>

- *Type:* str

A path to a directory of PEM-encoded certificate authority files to use to check the authenticity of client and server connections.

Can also be specified with the `CONSUL_CAPATH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#ca_path ConsulProvider#ca_path}

---

##### `ca_pem`<sup>Optional</sup> <a name="ca_pem" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.caPem"></a>

- *Type:* str

PEM-encoded certificate authority used to verify the remote agent's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#ca_pem ConsulProvider#ca_pem}

---

##### `cert_file`<sup>Optional</sup> <a name="cert_file" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.certFile"></a>

- *Type:* str

A path to a PEM-encoded certificate provided to the remote agent; requires use of `key_file` or `key_pem`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#cert_file ConsulProvider#cert_file}

---

##### `cert_pem`<sup>Optional</sup> <a name="cert_pem" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.certPem"></a>

- *Type:* str

PEM-encoded certificate provided to the remote agent; requires use of `key_file` or `key_pem`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#cert_pem ConsulProvider#cert_pem}

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.datacenter"></a>

- *Type:* str

The datacenter to use. Defaults to that of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#datacenter ConsulProvider#datacenter}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.header"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.provider.ConsulProviderHeader">ConsulProviderHeader</a>]]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#header ConsulProvider#header}

---

##### `http_auth`<sup>Optional</sup> <a name="http_auth" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.httpAuth"></a>

- *Type:* str

HTTP Basic Authentication credentials to be used when communicating with Consul, in the format of either `user` or `user:pass`.

This may also be specified using the `CONSUL_HTTP_AUTH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#http_auth ConsulProvider#http_auth}

---

##### `insecure_https`<sup>Optional</sup> <a name="insecure_https" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.insecureHttps"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean value to disable SSL certificate verification;

setting this value to true is not recommended for production use. Only use this with scheme set to "https".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#insecure_https ConsulProvider#insecure_https}

---

##### `key_file`<sup>Optional</sup> <a name="key_file" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.keyFile"></a>

- *Type:* str

A path to a PEM-encoded private key, required if `cert_file` or `cert_pem` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#key_file ConsulProvider#key_file}

---

##### `key_pem`<sup>Optional</sup> <a name="key_pem" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.keyPem"></a>

- *Type:* str

PEM-encoded private key, required if `cert_file` or `cert_pem` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#key_pem ConsulProvider#key_pem}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#namespace ConsulProvider#namespace}.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.scheme"></a>

- *Type:* str

The URL scheme of the agent to use ("http" or "https"). Defaults to "http".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#scheme ConsulProvider#scheme}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.token"></a>

- *Type:* str

The ACL token to use by default when making requests to the agent.

Can also be specified with `CONSUL_HTTP_TOKEN` or `CONSUL_TOKEN` as an environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#token ConsulProvider#token}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetAuthJwt">reset_auth_jwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetCaFile">reset_ca_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetCaPath">reset_ca_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetCaPem">reset_ca_pem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetCertFile">reset_cert_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetCertPem">reset_cert_pem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetDatacenter">reset_datacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetHeader">reset_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetHttpAuth">reset_http_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetInsecureHttps">reset_insecure_https</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetKeyFile">reset_key_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetKeyPem">reset_key_pem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetScheme">reset_scheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetToken">reset_token</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.provider.ConsulProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-consul.provider.ConsulProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.provider.ConsulProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.provider.ConsulProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-consul.provider.ConsulProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-consul.provider.ConsulProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-consul.provider.ConsulProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-consul.provider.ConsulProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-consul.provider.ConsulProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_address` <a name="reset_address" id="@cdktf/provider-consul.provider.ConsulProvider.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-consul.provider.ConsulProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_auth_jwt` <a name="reset_auth_jwt" id="@cdktf/provider-consul.provider.ConsulProvider.resetAuthJwt"></a>

```python
def reset_auth_jwt() -> None
```

##### `reset_ca_file` <a name="reset_ca_file" id="@cdktf/provider-consul.provider.ConsulProvider.resetCaFile"></a>

```python
def reset_ca_file() -> None
```

##### `reset_ca_path` <a name="reset_ca_path" id="@cdktf/provider-consul.provider.ConsulProvider.resetCaPath"></a>

```python
def reset_ca_path() -> None
```

##### `reset_ca_pem` <a name="reset_ca_pem" id="@cdktf/provider-consul.provider.ConsulProvider.resetCaPem"></a>

```python
def reset_ca_pem() -> None
```

##### `reset_cert_file` <a name="reset_cert_file" id="@cdktf/provider-consul.provider.ConsulProvider.resetCertFile"></a>

```python
def reset_cert_file() -> None
```

##### `reset_cert_pem` <a name="reset_cert_pem" id="@cdktf/provider-consul.provider.ConsulProvider.resetCertPem"></a>

```python
def reset_cert_pem() -> None
```

##### `reset_datacenter` <a name="reset_datacenter" id="@cdktf/provider-consul.provider.ConsulProvider.resetDatacenter"></a>

```python
def reset_datacenter() -> None
```

##### `reset_header` <a name="reset_header" id="@cdktf/provider-consul.provider.ConsulProvider.resetHeader"></a>

```python
def reset_header() -> None
```

##### `reset_http_auth` <a name="reset_http_auth" id="@cdktf/provider-consul.provider.ConsulProvider.resetHttpAuth"></a>

```python
def reset_http_auth() -> None
```

##### `reset_insecure_https` <a name="reset_insecure_https" id="@cdktf/provider-consul.provider.ConsulProvider.resetInsecureHttps"></a>

```python
def reset_insecure_https() -> None
```

##### `reset_key_file` <a name="reset_key_file" id="@cdktf/provider-consul.provider.ConsulProvider.resetKeyFile"></a>

```python
def reset_key_file() -> None
```

##### `reset_key_pem` <a name="reset_key_pem" id="@cdktf/provider-consul.provider.ConsulProvider.resetKeyPem"></a>

```python
def reset_key_pem() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-consul.provider.ConsulProvider.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_scheme` <a name="reset_scheme" id="@cdktf/provider-consul.provider.ConsulProvider.resetScheme"></a>

```python
def reset_scheme() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-consul.provider.ConsulProvider.resetToken"></a>

```python
def reset_token() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ConsulProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-consul.provider.ConsulProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_consul import provider

provider.ConsulProvider.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.provider.ConsulProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-consul.provider.ConsulProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_consul import provider

provider.ConsulProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.provider.ConsulProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-consul.provider.ConsulProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_consul import provider

provider.ConsulProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.provider.ConsulProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-consul.provider.ConsulProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_consul import provider

provider.ConsulProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ConsulProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.provider.ConsulProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-consul.provider.ConsulProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConsulProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-consul.provider.ConsulProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConsulProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.provider.ConsulProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ConsulProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.authJwtInput">auth_jwt_input</a></code> | <code><a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt">ConsulProviderAuthJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.caFileInput">ca_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.caPathInput">ca_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.caPemInput">ca_pem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.certFileInput">cert_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.certPemInput">cert_pem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.datacenterInput">datacenter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.headerInput">header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.provider.ConsulProviderHeader">ConsulProviderHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.httpAuthInput">http_auth_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.insecureHttpsInput">insecure_https_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.keyFileInput">key_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.keyPemInput">key_pem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.schemeInput">scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.authJwt">auth_jwt</a></code> | <code><a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt">ConsulProviderAuthJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.caFile">ca_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.caPath">ca_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.caPem">ca_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.certFile">cert_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.certPem">cert_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.datacenter">datacenter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.header">header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.provider.ConsulProviderHeader">ConsulProviderHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.httpAuth">http_auth</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.insecureHttps">insecure_https</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.keyFile">key_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.keyPem">key_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.scheme">scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.token">token</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.provider.ConsulProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-consul.provider.ConsulProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.provider.ConsulProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-consul.provider.ConsulProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-consul.provider.ConsulProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-consul.provider.ConsulProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-consul.provider.ConsulProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-consul.provider.ConsulProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-consul.provider.ConsulProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-consul.provider.ConsulProvider.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-consul.provider.ConsulProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `auth_jwt_input`<sup>Optional</sup> <a name="auth_jwt_input" id="@cdktf/provider-consul.provider.ConsulProvider.property.authJwtInput"></a>

```python
auth_jwt_input: ConsulProviderAuthJwt
```

- *Type:* <a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt">ConsulProviderAuthJwt</a>

---

##### `ca_file_input`<sup>Optional</sup> <a name="ca_file_input" id="@cdktf/provider-consul.provider.ConsulProvider.property.caFileInput"></a>

```python
ca_file_input: str
```

- *Type:* str

---

##### `ca_path_input`<sup>Optional</sup> <a name="ca_path_input" id="@cdktf/provider-consul.provider.ConsulProvider.property.caPathInput"></a>

```python
ca_path_input: str
```

- *Type:* str

---

##### `ca_pem_input`<sup>Optional</sup> <a name="ca_pem_input" id="@cdktf/provider-consul.provider.ConsulProvider.property.caPemInput"></a>

```python
ca_pem_input: str
```

- *Type:* str

---

##### `cert_file_input`<sup>Optional</sup> <a name="cert_file_input" id="@cdktf/provider-consul.provider.ConsulProvider.property.certFileInput"></a>

```python
cert_file_input: str
```

- *Type:* str

---

##### `cert_pem_input`<sup>Optional</sup> <a name="cert_pem_input" id="@cdktf/provider-consul.provider.ConsulProvider.property.certPemInput"></a>

```python
cert_pem_input: str
```

- *Type:* str

---

##### `datacenter_input`<sup>Optional</sup> <a name="datacenter_input" id="@cdktf/provider-consul.provider.ConsulProvider.property.datacenterInput"></a>

```python
datacenter_input: str
```

- *Type:* str

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktf/provider-consul.provider.ConsulProvider.property.headerInput"></a>

```python
header_input: typing.Union[IResolvable, typing.List[ConsulProviderHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.provider.ConsulProviderHeader">ConsulProviderHeader</a>]]

---

##### `http_auth_input`<sup>Optional</sup> <a name="http_auth_input" id="@cdktf/provider-consul.provider.ConsulProvider.property.httpAuthInput"></a>

```python
http_auth_input: str
```

- *Type:* str

---

##### `insecure_https_input`<sup>Optional</sup> <a name="insecure_https_input" id="@cdktf/provider-consul.provider.ConsulProvider.property.insecureHttpsInput"></a>

```python
insecure_https_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_file_input`<sup>Optional</sup> <a name="key_file_input" id="@cdktf/provider-consul.provider.ConsulProvider.property.keyFileInput"></a>

```python
key_file_input: str
```

- *Type:* str

---

##### `key_pem_input`<sup>Optional</sup> <a name="key_pem_input" id="@cdktf/provider-consul.provider.ConsulProvider.property.keyPemInput"></a>

```python
key_pem_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-consul.provider.ConsulProvider.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `scheme_input`<sup>Optional</sup> <a name="scheme_input" id="@cdktf/provider-consul.provider.ConsulProvider.property.schemeInput"></a>

```python
scheme_input: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-consul.provider.ConsulProvider.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-consul.provider.ConsulProvider.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `auth_jwt`<sup>Optional</sup> <a name="auth_jwt" id="@cdktf/provider-consul.provider.ConsulProvider.property.authJwt"></a>

```python
auth_jwt: ConsulProviderAuthJwt
```

- *Type:* <a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt">ConsulProviderAuthJwt</a>

---

##### `ca_file`<sup>Optional</sup> <a name="ca_file" id="@cdktf/provider-consul.provider.ConsulProvider.property.caFile"></a>

```python
ca_file: str
```

- *Type:* str

---

##### `ca_path`<sup>Optional</sup> <a name="ca_path" id="@cdktf/provider-consul.provider.ConsulProvider.property.caPath"></a>

```python
ca_path: str
```

- *Type:* str

---

##### `ca_pem`<sup>Optional</sup> <a name="ca_pem" id="@cdktf/provider-consul.provider.ConsulProvider.property.caPem"></a>

```python
ca_pem: str
```

- *Type:* str

---

##### `cert_file`<sup>Optional</sup> <a name="cert_file" id="@cdktf/provider-consul.provider.ConsulProvider.property.certFile"></a>

```python
cert_file: str
```

- *Type:* str

---

##### `cert_pem`<sup>Optional</sup> <a name="cert_pem" id="@cdktf/provider-consul.provider.ConsulProvider.property.certPem"></a>

```python
cert_pem: str
```

- *Type:* str

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.provider.ConsulProvider.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-consul.provider.ConsulProvider.property.header"></a>

```python
header: typing.Union[IResolvable, typing.List[ConsulProviderHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.provider.ConsulProviderHeader">ConsulProviderHeader</a>]]

---

##### `http_auth`<sup>Optional</sup> <a name="http_auth" id="@cdktf/provider-consul.provider.ConsulProvider.property.httpAuth"></a>

```python
http_auth: str
```

- *Type:* str

---

##### `insecure_https`<sup>Optional</sup> <a name="insecure_https" id="@cdktf/provider-consul.provider.ConsulProvider.property.insecureHttps"></a>

```python
insecure_https: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_file`<sup>Optional</sup> <a name="key_file" id="@cdktf/provider-consul.provider.ConsulProvider.property.keyFile"></a>

```python
key_file: str
```

- *Type:* str

---

##### `key_pem`<sup>Optional</sup> <a name="key_pem" id="@cdktf/provider-consul.provider.ConsulProvider.property.keyPem"></a>

```python
key_pem: str
```

- *Type:* str

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.provider.ConsulProvider.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-consul.provider.ConsulProvider.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-consul.provider.ConsulProvider.property.token"></a>

```python
token: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.provider.ConsulProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConsulProviderAuthJwt <a name="ConsulProviderAuthJwt" id="@cdktf/provider-consul.provider.ConsulProviderAuthJwt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.provider.ConsulProviderAuthJwt.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import provider

provider.ConsulProviderAuthJwt(
  auth_method: str,
  bearer_token: str = None,
  meta: typing.Mapping[str] = None,
  use_terraform_cloud_workload_identity: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt.property.authMethod">auth_method</a></code> | <code>str</code> | The name of the auth method to use for login. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt.property.bearerToken">bearer_token</a></code> | <code>str</code> | The bearer token to present to the auth method during login for authentication purposes. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt.property.meta">meta</a></code> | <code>typing.Mapping[str]</code> | Specifies arbitrary KV metadata linked to the token. Can be useful to track origins. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt.property.useTerraformCloudWorkloadIdentity">use_terraform_cloud_workload_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to use a [Terraform Workload Identity token](https://developer.hashicorp.com/terraform/cloud-docs/workspaces/dynamic-provider-credentials/workload-identity-tokens). The token will be read from the `TFC_WORKLOAD_IDENTITY_TOKEN` environment variable. |

---

##### `auth_method`<sup>Required</sup> <a name="auth_method" id="@cdktf/provider-consul.provider.ConsulProviderAuthJwt.property.authMethod"></a>

```python
auth_method: str
```

- *Type:* str

The name of the auth method to use for login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#auth_method ConsulProvider#auth_method}

---

##### `bearer_token`<sup>Optional</sup> <a name="bearer_token" id="@cdktf/provider-consul.provider.ConsulProviderAuthJwt.property.bearerToken"></a>

```python
bearer_token: str
```

- *Type:* str

The bearer token to present to the auth method during login for authentication purposes.

For the Kubernetes auth method this is a [Service Account Token (JWT)](https://kubernetes.io/docs/reference/access-authn-authz/authentication/#service-account-tokens).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#bearer_token ConsulProvider#bearer_token}

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-consul.provider.ConsulProviderAuthJwt.property.meta"></a>

```python
meta: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Specifies arbitrary KV metadata linked to the token. Can be useful to track origins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#meta ConsulProvider#meta}

---

##### `use_terraform_cloud_workload_identity`<sup>Optional</sup> <a name="use_terraform_cloud_workload_identity" id="@cdktf/provider-consul.provider.ConsulProviderAuthJwt.property.useTerraformCloudWorkloadIdentity"></a>

```python
use_terraform_cloud_workload_identity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to use a [Terraform Workload Identity token](https://developer.hashicorp.com/terraform/cloud-docs/workspaces/dynamic-provider-credentials/workload-identity-tokens). The token will be read from the `TFC_WORKLOAD_IDENTITY_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#use_terraform_cloud_workload_identity ConsulProvider#use_terraform_cloud_workload_identity}

---

### ConsulProviderConfig <a name="ConsulProviderConfig" id="@cdktf/provider-consul.provider.ConsulProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.provider.ConsulProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import provider

provider.ConsulProviderConfig(
  address: str = None,
  alias: str = None,
  auth_jwt: ConsulProviderAuthJwt = None,
  ca_file: str = None,
  ca_path: str = None,
  ca_pem: str = None,
  cert_file: str = None,
  cert_pem: str = None,
  datacenter: str = None,
  header: typing.Union[IResolvable, typing.List[ConsulProviderHeader]] = None,
  http_auth: str = None,
  insecure_https: typing.Union[bool, IResolvable] = None,
  key_file: str = None,
  key_pem: str = None,
  namespace: str = None,
  scheme: str = None,
  token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.address">address</a></code> | <code>str</code> | The HTTP(S) API address of the agent to use. Defaults to "127.0.0.1:8500". |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.authJwt">auth_jwt</a></code> | <code><a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt">ConsulProviderAuthJwt</a></code> | auth_jwt block. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.caFile">ca_file</a></code> | <code>str</code> | A path to a PEM-encoded certificate authority used to verify the remote agent's certificate. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.caPath">ca_path</a></code> | <code>str</code> | A path to a directory of PEM-encoded certificate authority files to use to check the authenticity of client and server connections. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.caPem">ca_pem</a></code> | <code>str</code> | PEM-encoded certificate authority used to verify the remote agent's certificate. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.certFile">cert_file</a></code> | <code>str</code> | A path to a PEM-encoded certificate provided to the remote agent; requires use of `key_file` or `key_pem`. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.certPem">cert_pem</a></code> | <code>str</code> | PEM-encoded certificate provided to the remote agent; requires use of `key_file` or `key_pem`. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.datacenter">datacenter</a></code> | <code>str</code> | The datacenter to use. Defaults to that of the agent. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.header">header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.provider.ConsulProviderHeader">ConsulProviderHeader</a>]]</code> | header block. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.httpAuth">http_auth</a></code> | <code>str</code> | HTTP Basic Authentication credentials to be used when communicating with Consul, in the format of either `user` or `user:pass`. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.insecureHttps">insecure_https</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Boolean value to disable SSL certificate verification; |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.keyFile">key_file</a></code> | <code>str</code> | A path to a PEM-encoded private key, required if `cert_file` or `cert_pem` is specified. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.keyPem">key_pem</a></code> | <code>str</code> | PEM-encoded private key, required if `cert_file` or `cert_pem` is specified. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#namespace ConsulProvider#namespace}. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.scheme">scheme</a></code> | <code>str</code> | The URL scheme of the agent to use ("http" or "https"). Defaults to "http". |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.token">token</a></code> | <code>str</code> | The ACL token to use by default when making requests to the agent. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.address"></a>

```python
address: str
```

- *Type:* str

The HTTP(S) API address of the agent to use. Defaults to "127.0.0.1:8500".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#address ConsulProvider#address}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#alias ConsulProvider#alias}

---

##### `auth_jwt`<sup>Optional</sup> <a name="auth_jwt" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.authJwt"></a>

```python
auth_jwt: ConsulProviderAuthJwt
```

- *Type:* <a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt">ConsulProviderAuthJwt</a>

auth_jwt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#auth_jwt ConsulProvider#auth_jwt}

---

##### `ca_file`<sup>Optional</sup> <a name="ca_file" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.caFile"></a>

```python
ca_file: str
```

- *Type:* str

A path to a PEM-encoded certificate authority used to verify the remote agent's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#ca_file ConsulProvider#ca_file}

---

##### `ca_path`<sup>Optional</sup> <a name="ca_path" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.caPath"></a>

```python
ca_path: str
```

- *Type:* str

A path to a directory of PEM-encoded certificate authority files to use to check the authenticity of client and server connections.

Can also be specified with the `CONSUL_CAPATH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#ca_path ConsulProvider#ca_path}

---

##### `ca_pem`<sup>Optional</sup> <a name="ca_pem" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.caPem"></a>

```python
ca_pem: str
```

- *Type:* str

PEM-encoded certificate authority used to verify the remote agent's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#ca_pem ConsulProvider#ca_pem}

---

##### `cert_file`<sup>Optional</sup> <a name="cert_file" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.certFile"></a>

```python
cert_file: str
```

- *Type:* str

A path to a PEM-encoded certificate provided to the remote agent; requires use of `key_file` or `key_pem`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#cert_file ConsulProvider#cert_file}

---

##### `cert_pem`<sup>Optional</sup> <a name="cert_pem" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.certPem"></a>

```python
cert_pem: str
```

- *Type:* str

PEM-encoded certificate provided to the remote agent; requires use of `key_file` or `key_pem`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#cert_pem ConsulProvider#cert_pem}

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

The datacenter to use. Defaults to that of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#datacenter ConsulProvider#datacenter}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.header"></a>

```python
header: typing.Union[IResolvable, typing.List[ConsulProviderHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.provider.ConsulProviderHeader">ConsulProviderHeader</a>]]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#header ConsulProvider#header}

---

##### `http_auth`<sup>Optional</sup> <a name="http_auth" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.httpAuth"></a>

```python
http_auth: str
```

- *Type:* str

HTTP Basic Authentication credentials to be used when communicating with Consul, in the format of either `user` or `user:pass`.

This may also be specified using the `CONSUL_HTTP_AUTH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#http_auth ConsulProvider#http_auth}

---

##### `insecure_https`<sup>Optional</sup> <a name="insecure_https" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.insecureHttps"></a>

```python
insecure_https: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean value to disable SSL certificate verification;

setting this value to true is not recommended for production use. Only use this with scheme set to "https".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#insecure_https ConsulProvider#insecure_https}

---

##### `key_file`<sup>Optional</sup> <a name="key_file" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.keyFile"></a>

```python
key_file: str
```

- *Type:* str

A path to a PEM-encoded private key, required if `cert_file` or `cert_pem` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#key_file ConsulProvider#key_file}

---

##### `key_pem`<sup>Optional</sup> <a name="key_pem" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.keyPem"></a>

```python
key_pem: str
```

- *Type:* str

PEM-encoded private key, required if `cert_file` or `cert_pem` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#key_pem ConsulProvider#key_pem}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#namespace ConsulProvider#namespace}.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

The URL scheme of the agent to use ("http" or "https"). Defaults to "http".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#scheme ConsulProvider#scheme}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.token"></a>

```python
token: str
```

- *Type:* str

The ACL token to use by default when making requests to the agent.

Can also be specified with `CONSUL_HTTP_TOKEN` or `CONSUL_TOKEN` as an environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#token ConsulProvider#token}

---

### ConsulProviderHeader <a name="ConsulProviderHeader" id="@cdktf/provider-consul.provider.ConsulProviderHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.provider.ConsulProviderHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import provider

provider.ConsulProviderHeader(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderHeader.property.name">name</a></code> | <code>str</code> | The name of the header. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderHeader.property.value">value</a></code> | <code>str</code> | The value of the header. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.provider.ConsulProviderHeader.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#name ConsulProvider#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.provider.ConsulProviderHeader.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs#value ConsulProvider#value}

---



