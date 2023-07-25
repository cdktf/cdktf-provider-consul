# `provider`

Refer to the Terraform Registory for docs: [`consul`](https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-consul.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConsulProvider <a name="ConsulProvider" id="@cdktf/provider-consul.provider.ConsulProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs consul}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.provider.ConsulProvider;

ConsulProvider.Builder.create(Construct scope, java.lang.String id)
//  .address(java.lang.String)
//  .alias(java.lang.String)
//  .authJwt(ConsulProviderAuthJwt)
//  .caFile(java.lang.String)
//  .caPath(java.lang.String)
//  .caPem(java.lang.String)
//  .certFile(java.lang.String)
//  .certPem(java.lang.String)
//  .datacenter(java.lang.String)
//  .header(IResolvable)
//  .header(java.util.List<ConsulProviderHeader>)
//  .httpAuth(java.lang.String)
//  .insecureHttps(java.lang.Boolean)
//  .insecureHttps(IResolvable)
//  .keyFile(java.lang.String)
//  .keyPem(java.lang.String)
//  .namespace(java.lang.String)
//  .scheme(java.lang.String)
//  .token(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.address">address</a></code> | <code>java.lang.String</code> | The HTTP(S) API address of the agent to use. Defaults to "127.0.0.1:8500". |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.authJwt">authJwt</a></code> | <code><a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt">ConsulProviderAuthJwt</a></code> | auth_jwt block. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.caFile">caFile</a></code> | <code>java.lang.String</code> | A path to a PEM-encoded certificate authority used to verify the remote agent's certificate. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.caPath">caPath</a></code> | <code>java.lang.String</code> | A path to a directory of PEM-encoded certificate authority files to use to check the authenticity of client and server connections. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.caPem">caPem</a></code> | <code>java.lang.String</code> | PEM-encoded certificate authority used to verify the remote agent's certificate. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.certFile">certFile</a></code> | <code>java.lang.String</code> | A path to a PEM-encoded certificate provided to the remote agent; requires use of `key_file` or `key_pem`. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.certPem">certPem</a></code> | <code>java.lang.String</code> | PEM-encoded certificate provided to the remote agent; requires use of `key_file` or `key_pem`. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.datacenter">datacenter</a></code> | <code>java.lang.String</code> | The datacenter to use. Defaults to that of the agent. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.header">header</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.provider.ConsulProviderHeader">ConsulProviderHeader</a>></code> | header block. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.httpAuth">httpAuth</a></code> | <code>java.lang.String</code> | HTTP Basic Authentication credentials to be used when communicating with Consul, in the format of either `user` or `user:pass`. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.insecureHttps">insecureHttps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean value to disable SSL certificate verification; |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.keyFile">keyFile</a></code> | <code>java.lang.String</code> | A path to a PEM-encoded private key, required if `cert_file` or `cert_pem` is specified. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.keyPem">keyPem</a></code> | <code>java.lang.String</code> | PEM-encoded private key, required if `cert_file` or `cert_pem` is specified. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#namespace ConsulProvider#namespace}. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.scheme">scheme</a></code> | <code>java.lang.String</code> | The URL scheme of the agent to use ("http" or "https"). Defaults to "http". |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | The ACL token to use by default when making requests to the agent. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.address"></a>

- *Type:* java.lang.String

The HTTP(S) API address of the agent to use. Defaults to "127.0.0.1:8500".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#address ConsulProvider#address}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#alias ConsulProvider#alias}

---

##### `authJwt`<sup>Optional</sup> <a name="authJwt" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.authJwt"></a>

- *Type:* <a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt">ConsulProviderAuthJwt</a>

auth_jwt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#auth_jwt ConsulProvider#auth_jwt}

---

##### `caFile`<sup>Optional</sup> <a name="caFile" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.caFile"></a>

- *Type:* java.lang.String

A path to a PEM-encoded certificate authority used to verify the remote agent's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#ca_file ConsulProvider#ca_file}

---

##### `caPath`<sup>Optional</sup> <a name="caPath" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.caPath"></a>

- *Type:* java.lang.String

A path to a directory of PEM-encoded certificate authority files to use to check the authenticity of client and server connections.

Can also be specified with the `CONSUL_CAPATH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#ca_path ConsulProvider#ca_path}

---

##### `caPem`<sup>Optional</sup> <a name="caPem" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.caPem"></a>

- *Type:* java.lang.String

PEM-encoded certificate authority used to verify the remote agent's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#ca_pem ConsulProvider#ca_pem}

---

##### `certFile`<sup>Optional</sup> <a name="certFile" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.certFile"></a>

- *Type:* java.lang.String

A path to a PEM-encoded certificate provided to the remote agent; requires use of `key_file` or `key_pem`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#cert_file ConsulProvider#cert_file}

---

##### `certPem`<sup>Optional</sup> <a name="certPem" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.certPem"></a>

- *Type:* java.lang.String

PEM-encoded certificate provided to the remote agent; requires use of `key_file` or `key_pem`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#cert_pem ConsulProvider#cert_pem}

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.datacenter"></a>

- *Type:* java.lang.String

The datacenter to use. Defaults to that of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#datacenter ConsulProvider#datacenter}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.header"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.provider.ConsulProviderHeader">ConsulProviderHeader</a>>

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#header ConsulProvider#header}

---

##### `httpAuth`<sup>Optional</sup> <a name="httpAuth" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.httpAuth"></a>

- *Type:* java.lang.String

HTTP Basic Authentication credentials to be used when communicating with Consul, in the format of either `user` or `user:pass`.

This may also be specified using the `CONSUL_HTTP_AUTH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#http_auth ConsulProvider#http_auth}

---

##### `insecureHttps`<sup>Optional</sup> <a name="insecureHttps" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.insecureHttps"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean value to disable SSL certificate verification;

setting this value to true is not recommended for production use. Only use this with scheme set to "https".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#insecure_https ConsulProvider#insecure_https}

---

##### `keyFile`<sup>Optional</sup> <a name="keyFile" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.keyFile"></a>

- *Type:* java.lang.String

A path to a PEM-encoded private key, required if `cert_file` or `cert_pem` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#key_file ConsulProvider#key_file}

---

##### `keyPem`<sup>Optional</sup> <a name="keyPem" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.keyPem"></a>

- *Type:* java.lang.String

PEM-encoded private key, required if `cert_file` or `cert_pem` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#key_pem ConsulProvider#key_pem}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#namespace ConsulProvider#namespace}.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.scheme"></a>

- *Type:* java.lang.String

The URL scheme of the agent to use ("http" or "https"). Defaults to "http".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#scheme ConsulProvider#scheme}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.token"></a>

- *Type:* java.lang.String

The ACL token to use by default when making requests to the agent.

Can also be specified with `CONSUL_HTTP_TOKEN` or `CONSUL_TOKEN` as an environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#token ConsulProvider#token}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetAuthJwt">resetAuthJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetCaFile">resetCaFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetCaPath">resetCaPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetCaPem">resetCaPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetCertFile">resetCertFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetCertPem">resetCertPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetHttpAuth">resetHttpAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetInsecureHttps">resetInsecureHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetKeyFile">resetKeyFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetKeyPem">resetKeyPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetScheme">resetScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetToken">resetToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.provider.ConsulProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.provider.ConsulProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.provider.ConsulProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.provider.ConsulProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.provider.ConsulProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.provider.ConsulProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.provider.ConsulProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.provider.ConsulProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.provider.ConsulProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-consul.provider.ConsulProvider.resetAddress"></a>

```java
public void resetAddress()
```

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-consul.provider.ConsulProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetAuthJwt` <a name="resetAuthJwt" id="@cdktf/provider-consul.provider.ConsulProvider.resetAuthJwt"></a>

```java
public void resetAuthJwt()
```

##### `resetCaFile` <a name="resetCaFile" id="@cdktf/provider-consul.provider.ConsulProvider.resetCaFile"></a>

```java
public void resetCaFile()
```

##### `resetCaPath` <a name="resetCaPath" id="@cdktf/provider-consul.provider.ConsulProvider.resetCaPath"></a>

```java
public void resetCaPath()
```

##### `resetCaPem` <a name="resetCaPem" id="@cdktf/provider-consul.provider.ConsulProvider.resetCaPem"></a>

```java
public void resetCaPem()
```

##### `resetCertFile` <a name="resetCertFile" id="@cdktf/provider-consul.provider.ConsulProvider.resetCertFile"></a>

```java
public void resetCertFile()
```

##### `resetCertPem` <a name="resetCertPem" id="@cdktf/provider-consul.provider.ConsulProvider.resetCertPem"></a>

```java
public void resetCertPem()
```

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-consul.provider.ConsulProvider.resetDatacenter"></a>

```java
public void resetDatacenter()
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-consul.provider.ConsulProvider.resetHeader"></a>

```java
public void resetHeader()
```

##### `resetHttpAuth` <a name="resetHttpAuth" id="@cdktf/provider-consul.provider.ConsulProvider.resetHttpAuth"></a>

```java
public void resetHttpAuth()
```

##### `resetInsecureHttps` <a name="resetInsecureHttps" id="@cdktf/provider-consul.provider.ConsulProvider.resetInsecureHttps"></a>

```java
public void resetInsecureHttps()
```

##### `resetKeyFile` <a name="resetKeyFile" id="@cdktf/provider-consul.provider.ConsulProvider.resetKeyFile"></a>

```java
public void resetKeyFile()
```

##### `resetKeyPem` <a name="resetKeyPem" id="@cdktf/provider-consul.provider.ConsulProvider.resetKeyPem"></a>

```java
public void resetKeyPem()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.provider.ConsulProvider.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetScheme` <a name="resetScheme" id="@cdktf/provider-consul.provider.ConsulProvider.resetScheme"></a>

```java
public void resetScheme()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-consul.provider.ConsulProvider.resetToken"></a>

```java
public void resetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.provider.ConsulProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.consul.provider.ConsulProvider;

ConsulProvider.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.provider.ConsulProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.consul.provider.ConsulProvider;

ConsulProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.provider.ConsulProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-consul.provider.ConsulProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.consul.provider.ConsulProvider;

ConsulProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.provider.ConsulProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.authJwtInput">authJwtInput</a></code> | <code><a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt">ConsulProviderAuthJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.caFileInput">caFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.caPathInput">caPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.caPemInput">caPemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.certFileInput">certFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.certPemInput">certPemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.datacenterInput">datacenterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.headerInput">headerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.provider.ConsulProviderHeader">ConsulProviderHeader</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.httpAuthInput">httpAuthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.insecureHttpsInput">insecureHttpsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.keyFileInput">keyFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.keyPemInput">keyPemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.schemeInput">schemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.authJwt">authJwt</a></code> | <code><a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt">ConsulProviderAuthJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.caFile">caFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.caPath">caPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.caPem">caPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.certFile">certFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.certPem">certPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.header">header</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.provider.ConsulProviderHeader">ConsulProviderHeader</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.httpAuth">httpAuth</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.insecureHttps">insecureHttps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.keyFile">keyFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.keyPem">keyPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.scheme">scheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.provider.ConsulProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.provider.ConsulProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.provider.ConsulProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.provider.ConsulProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-consul.provider.ConsulProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.provider.ConsulProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.provider.ConsulProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-consul.provider.ConsulProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-consul.provider.ConsulProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `authJwtInput`<sup>Optional</sup> <a name="authJwtInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.authJwtInput"></a>

```java
public ConsulProviderAuthJwt getAuthJwtInput();
```

- *Type:* <a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt">ConsulProviderAuthJwt</a>

---

##### `caFileInput`<sup>Optional</sup> <a name="caFileInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.caFileInput"></a>

```java
public java.lang.String getCaFileInput();
```

- *Type:* java.lang.String

---

##### `caPathInput`<sup>Optional</sup> <a name="caPathInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.caPathInput"></a>

```java
public java.lang.String getCaPathInput();
```

- *Type:* java.lang.String

---

##### `caPemInput`<sup>Optional</sup> <a name="caPemInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.caPemInput"></a>

```java
public java.lang.String getCaPemInput();
```

- *Type:* java.lang.String

---

##### `certFileInput`<sup>Optional</sup> <a name="certFileInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.certFileInput"></a>

```java
public java.lang.String getCertFileInput();
```

- *Type:* java.lang.String

---

##### `certPemInput`<sup>Optional</sup> <a name="certPemInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.certPemInput"></a>

```java
public java.lang.String getCertPemInput();
```

- *Type:* java.lang.String

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.datacenterInput"></a>

```java
public java.lang.String getDatacenterInput();
```

- *Type:* java.lang.String

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.headerInput"></a>

```java
public java.lang.Object getHeaderInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.provider.ConsulProviderHeader">ConsulProviderHeader</a>>

---

##### `httpAuthInput`<sup>Optional</sup> <a name="httpAuthInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.httpAuthInput"></a>

```java
public java.lang.String getHttpAuthInput();
```

- *Type:* java.lang.String

---

##### `insecureHttpsInput`<sup>Optional</sup> <a name="insecureHttpsInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.insecureHttpsInput"></a>

```java
public java.lang.Object getInsecureHttpsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyFileInput`<sup>Optional</sup> <a name="keyFileInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.keyFileInput"></a>

```java
public java.lang.String getKeyFileInput();
```

- *Type:* java.lang.String

---

##### `keyPemInput`<sup>Optional</sup> <a name="keyPemInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.keyPemInput"></a>

```java
public java.lang.String getKeyPemInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.schemeInput"></a>

```java
public java.lang.String getSchemeInput();
```

- *Type:* java.lang.String

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-consul.provider.ConsulProvider.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `authJwt`<sup>Optional</sup> <a name="authJwt" id="@cdktf/provider-consul.provider.ConsulProvider.property.authJwt"></a>

```java
public ConsulProviderAuthJwt getAuthJwt();
```

- *Type:* <a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt">ConsulProviderAuthJwt</a>

---

##### `caFile`<sup>Optional</sup> <a name="caFile" id="@cdktf/provider-consul.provider.ConsulProvider.property.caFile"></a>

```java
public java.lang.String getCaFile();
```

- *Type:* java.lang.String

---

##### `caPath`<sup>Optional</sup> <a name="caPath" id="@cdktf/provider-consul.provider.ConsulProvider.property.caPath"></a>

```java
public java.lang.String getCaPath();
```

- *Type:* java.lang.String

---

##### `caPem`<sup>Optional</sup> <a name="caPem" id="@cdktf/provider-consul.provider.ConsulProvider.property.caPem"></a>

```java
public java.lang.String getCaPem();
```

- *Type:* java.lang.String

---

##### `certFile`<sup>Optional</sup> <a name="certFile" id="@cdktf/provider-consul.provider.ConsulProvider.property.certFile"></a>

```java
public java.lang.String getCertFile();
```

- *Type:* java.lang.String

---

##### `certPem`<sup>Optional</sup> <a name="certPem" id="@cdktf/provider-consul.provider.ConsulProvider.property.certPem"></a>

```java
public java.lang.String getCertPem();
```

- *Type:* java.lang.String

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.provider.ConsulProvider.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-consul.provider.ConsulProvider.property.header"></a>

```java
public java.lang.Object getHeader();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.provider.ConsulProviderHeader">ConsulProviderHeader</a>>

---

##### `httpAuth`<sup>Optional</sup> <a name="httpAuth" id="@cdktf/provider-consul.provider.ConsulProvider.property.httpAuth"></a>

```java
public java.lang.String getHttpAuth();
```

- *Type:* java.lang.String

---

##### `insecureHttps`<sup>Optional</sup> <a name="insecureHttps" id="@cdktf/provider-consul.provider.ConsulProvider.property.insecureHttps"></a>

```java
public java.lang.Object getInsecureHttps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyFile`<sup>Optional</sup> <a name="keyFile" id="@cdktf/provider-consul.provider.ConsulProvider.property.keyFile"></a>

```java
public java.lang.String getKeyFile();
```

- *Type:* java.lang.String

---

##### `keyPem`<sup>Optional</sup> <a name="keyPem" id="@cdktf/provider-consul.provider.ConsulProvider.property.keyPem"></a>

```java
public java.lang.String getKeyPem();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.provider.ConsulProvider.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-consul.provider.ConsulProvider.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-consul.provider.ConsulProvider.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.provider.ConsulProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConsulProviderAuthJwt <a name="ConsulProviderAuthJwt" id="@cdktf/provider-consul.provider.ConsulProviderAuthJwt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.provider.ConsulProviderAuthJwt.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.provider.ConsulProviderAuthJwt;

ConsulProviderAuthJwt.builder()
    .authMethod(java.lang.String)
//  .bearerToken(java.lang.String)
//  .meta(java.util.Map<java.lang.String, java.lang.String>)
//  .useTerraformCloudWorkloadIdentity(java.lang.Boolean)
//  .useTerraformCloudWorkloadIdentity(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt.property.authMethod">authMethod</a></code> | <code>java.lang.String</code> | The name of the auth method to use for login. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt.property.bearerToken">bearerToken</a></code> | <code>java.lang.String</code> | The bearer token to present to the auth method during login for authentication purposes. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt.property.meta">meta</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Specifies arbitrary KV metadata linked to the token. Can be useful to track origins. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt.property.useTerraformCloudWorkloadIdentity">useTerraformCloudWorkloadIdentity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to use a [Terraform Workload Identity token](https://developer.hashicorp.com/terraform/cloud-docs/workspaces/dynamic-provider-credentials/workload-identity-tokens). The token will be read from the `TFC_WORKLOAD_IDENTITY_TOKEN` environment variable. |

---

##### `authMethod`<sup>Required</sup> <a name="authMethod" id="@cdktf/provider-consul.provider.ConsulProviderAuthJwt.property.authMethod"></a>

```java
public java.lang.String getAuthMethod();
```

- *Type:* java.lang.String

The name of the auth method to use for login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#auth_method ConsulProvider#auth_method}

---

##### `bearerToken`<sup>Optional</sup> <a name="bearerToken" id="@cdktf/provider-consul.provider.ConsulProviderAuthJwt.property.bearerToken"></a>

```java
public java.lang.String getBearerToken();
```

- *Type:* java.lang.String

The bearer token to present to the auth method during login for authentication purposes.

For the Kubernetes auth method this is a [Service Account Token (JWT)](https://kubernetes.io/docs/reference/access-authn-authz/authentication/#service-account-tokens).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#bearer_token ConsulProvider#bearer_token}

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-consul.provider.ConsulProviderAuthJwt.property.meta"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMeta();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Specifies arbitrary KV metadata linked to the token. Can be useful to track origins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#meta ConsulProvider#meta}

---

##### `useTerraformCloudWorkloadIdentity`<sup>Optional</sup> <a name="useTerraformCloudWorkloadIdentity" id="@cdktf/provider-consul.provider.ConsulProviderAuthJwt.property.useTerraformCloudWorkloadIdentity"></a>

```java
public java.lang.Object getUseTerraformCloudWorkloadIdentity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to use a [Terraform Workload Identity token](https://developer.hashicorp.com/terraform/cloud-docs/workspaces/dynamic-provider-credentials/workload-identity-tokens). The token will be read from the `TFC_WORKLOAD_IDENTITY_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#use_terraform_cloud_workload_identity ConsulProvider#use_terraform_cloud_workload_identity}

---

### ConsulProviderConfig <a name="ConsulProviderConfig" id="@cdktf/provider-consul.provider.ConsulProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.provider.ConsulProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.provider.ConsulProviderConfig;

ConsulProviderConfig.builder()
//  .address(java.lang.String)
//  .alias(java.lang.String)
//  .authJwt(ConsulProviderAuthJwt)
//  .caFile(java.lang.String)
//  .caPath(java.lang.String)
//  .caPem(java.lang.String)
//  .certFile(java.lang.String)
//  .certPem(java.lang.String)
//  .datacenter(java.lang.String)
//  .header(IResolvable)
//  .header(java.util.List<ConsulProviderHeader>)
//  .httpAuth(java.lang.String)
//  .insecureHttps(java.lang.Boolean)
//  .insecureHttps(IResolvable)
//  .keyFile(java.lang.String)
//  .keyPem(java.lang.String)
//  .namespace(java.lang.String)
//  .scheme(java.lang.String)
//  .token(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.address">address</a></code> | <code>java.lang.String</code> | The HTTP(S) API address of the agent to use. Defaults to "127.0.0.1:8500". |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.authJwt">authJwt</a></code> | <code><a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt">ConsulProviderAuthJwt</a></code> | auth_jwt block. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.caFile">caFile</a></code> | <code>java.lang.String</code> | A path to a PEM-encoded certificate authority used to verify the remote agent's certificate. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.caPath">caPath</a></code> | <code>java.lang.String</code> | A path to a directory of PEM-encoded certificate authority files to use to check the authenticity of client and server connections. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.caPem">caPem</a></code> | <code>java.lang.String</code> | PEM-encoded certificate authority used to verify the remote agent's certificate. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.certFile">certFile</a></code> | <code>java.lang.String</code> | A path to a PEM-encoded certificate provided to the remote agent; requires use of `key_file` or `key_pem`. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.certPem">certPem</a></code> | <code>java.lang.String</code> | PEM-encoded certificate provided to the remote agent; requires use of `key_file` or `key_pem`. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | The datacenter to use. Defaults to that of the agent. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.header">header</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.provider.ConsulProviderHeader">ConsulProviderHeader</a>></code> | header block. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.httpAuth">httpAuth</a></code> | <code>java.lang.String</code> | HTTP Basic Authentication credentials to be used when communicating with Consul, in the format of either `user` or `user:pass`. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.insecureHttps">insecureHttps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean value to disable SSL certificate verification; |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.keyFile">keyFile</a></code> | <code>java.lang.String</code> | A path to a PEM-encoded private key, required if `cert_file` or `cert_pem` is specified. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.keyPem">keyPem</a></code> | <code>java.lang.String</code> | PEM-encoded private key, required if `cert_file` or `cert_pem` is specified. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#namespace ConsulProvider#namespace}. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.scheme">scheme</a></code> | <code>java.lang.String</code> | The URL scheme of the agent to use ("http" or "https"). Defaults to "http". |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.token">token</a></code> | <code>java.lang.String</code> | The ACL token to use by default when making requests to the agent. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

The HTTP(S) API address of the agent to use. Defaults to "127.0.0.1:8500".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#address ConsulProvider#address}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#alias ConsulProvider#alias}

---

##### `authJwt`<sup>Optional</sup> <a name="authJwt" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.authJwt"></a>

```java
public ConsulProviderAuthJwt getAuthJwt();
```

- *Type:* <a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt">ConsulProviderAuthJwt</a>

auth_jwt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#auth_jwt ConsulProvider#auth_jwt}

---

##### `caFile`<sup>Optional</sup> <a name="caFile" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.caFile"></a>

```java
public java.lang.String getCaFile();
```

- *Type:* java.lang.String

A path to a PEM-encoded certificate authority used to verify the remote agent's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#ca_file ConsulProvider#ca_file}

---

##### `caPath`<sup>Optional</sup> <a name="caPath" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.caPath"></a>

```java
public java.lang.String getCaPath();
```

- *Type:* java.lang.String

A path to a directory of PEM-encoded certificate authority files to use to check the authenticity of client and server connections.

Can also be specified with the `CONSUL_CAPATH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#ca_path ConsulProvider#ca_path}

---

##### `caPem`<sup>Optional</sup> <a name="caPem" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.caPem"></a>

```java
public java.lang.String getCaPem();
```

- *Type:* java.lang.String

PEM-encoded certificate authority used to verify the remote agent's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#ca_pem ConsulProvider#ca_pem}

---

##### `certFile`<sup>Optional</sup> <a name="certFile" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.certFile"></a>

```java
public java.lang.String getCertFile();
```

- *Type:* java.lang.String

A path to a PEM-encoded certificate provided to the remote agent; requires use of `key_file` or `key_pem`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#cert_file ConsulProvider#cert_file}

---

##### `certPem`<sup>Optional</sup> <a name="certPem" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.certPem"></a>

```java
public java.lang.String getCertPem();
```

- *Type:* java.lang.String

PEM-encoded certificate provided to the remote agent; requires use of `key_file` or `key_pem`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#cert_pem ConsulProvider#cert_pem}

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

The datacenter to use. Defaults to that of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#datacenter ConsulProvider#datacenter}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.header"></a>

```java
public java.lang.Object getHeader();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.provider.ConsulProviderHeader">ConsulProviderHeader</a>>

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#header ConsulProvider#header}

---

##### `httpAuth`<sup>Optional</sup> <a name="httpAuth" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.httpAuth"></a>

```java
public java.lang.String getHttpAuth();
```

- *Type:* java.lang.String

HTTP Basic Authentication credentials to be used when communicating with Consul, in the format of either `user` or `user:pass`.

This may also be specified using the `CONSUL_HTTP_AUTH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#http_auth ConsulProvider#http_auth}

---

##### `insecureHttps`<sup>Optional</sup> <a name="insecureHttps" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.insecureHttps"></a>

```java
public java.lang.Object getInsecureHttps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean value to disable SSL certificate verification;

setting this value to true is not recommended for production use. Only use this with scheme set to "https".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#insecure_https ConsulProvider#insecure_https}

---

##### `keyFile`<sup>Optional</sup> <a name="keyFile" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.keyFile"></a>

```java
public java.lang.String getKeyFile();
```

- *Type:* java.lang.String

A path to a PEM-encoded private key, required if `cert_file` or `cert_pem` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#key_file ConsulProvider#key_file}

---

##### `keyPem`<sup>Optional</sup> <a name="keyPem" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.keyPem"></a>

```java
public java.lang.String getKeyPem();
```

- *Type:* java.lang.String

PEM-encoded private key, required if `cert_file` or `cert_pem` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#key_pem ConsulProvider#key_pem}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#namespace ConsulProvider#namespace}.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

The URL scheme of the agent to use ("http" or "https"). Defaults to "http".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#scheme ConsulProvider#scheme}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

The ACL token to use by default when making requests to the agent.

Can also be specified with `CONSUL_HTTP_TOKEN` or `CONSUL_TOKEN` as an environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#token ConsulProvider#token}

---

### ConsulProviderHeader <a name="ConsulProviderHeader" id="@cdktf/provider-consul.provider.ConsulProviderHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.provider.ConsulProviderHeader.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.provider.ConsulProviderHeader;

ConsulProviderHeader.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderHeader.property.name">name</a></code> | <code>java.lang.String</code> | The name of the header. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderHeader.property.value">value</a></code> | <code>java.lang.String</code> | The value of the header. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.provider.ConsulProviderHeader.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#name ConsulProvider#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.provider.ConsulProviderHeader.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs#value ConsulProvider#value}

---



